from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    device = playwright.devices['iPhone 11']
    context = browser.new_context(**device)
    page = context.new_page()

    try:
        page.goto("http://localhost:8080/index.html")
        page.wait_for_selector("text=Dienstgrad: Schütze", timeout=5000)

        # Go to Modules
        page.click("button[data-target='modules']")
        page.wait_for_selector("h2:has-text('Dienstvorschriften')", timeout=5000)

        # Select Module
        page.click(".module-tile >> nth=0")
        page.wait_for_selector("text=Mission 1: Befehlsbegriff", timeout=5000)

        # Select Unit
        page.click(".unit-card >> nth=0")
        page.wait_for_selector("#unit-view", timeout=5000)

        # Card 1: Befehlsbegriff (§ 2 Nr. 2 WStG)
        page.wait_for_selector("text=Befehlsbegriff (§ 2 Nr. 2 WStG)", timeout=5000)
        page.click("#next-btn")

        # Card 2: Vorgesetztenverhältnisse (VvV)
        page.wait_for_selector("text=Vorgesetztenverhältnisse (VvV)", timeout=5000)
        page.click("#next-btn")

        # Finish / Quiz might not be there anymore, or is empty. Let's just wait for the completion text or return
        # Since units are text cards in current data.js, and no quiz is present for Befehlsbegriff in data.js, it might just return.

        # Verify Return
        page.wait_for_selector("text=Mission 1: Befehlsbegriff", timeout=5000)

        # Check Profile
        page.click("button[data-target='profile']")
        page.wait_for_selector("text=Personalakte", timeout=5000)

        # Verify XP
        xp_text = page.locator(".card p.text-secondary").first.inner_text()
        print(f"Final XP: {xp_text}")
        if int(xp_text) <= 0:
            raise AssertionError("XP did not increase")

        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
