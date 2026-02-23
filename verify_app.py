from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    device = playwright.devices['iPhone 11']
    context = browser.new_context(**device)
    page = context.new_page()

    try:
        page.goto("http://localhost:8080/index.html")
        page.wait_for_selector("text=Rank: Schütze", timeout=5000)

        # Go to Modules
        page.click("button[data-target='modules']")
        page.wait_for_selector("h2:has-text('Field Manuals')", timeout=5000)

        # Select Module
        page.click(".module-card >> nth=0")
        page.wait_for_selector("text=Mission 1: Befehlsbegriff", timeout=5000)

        # Select Unit
        page.click(".unit-card >> nth=0")
        page.wait_for_selector("#unit-content", timeout=5000)

        # Card 1: Definition
        page.wait_for_selector("text=Command Definition", timeout=5000)
        page.click("#next-btn")

        # Card 2: Superior Status
        page.wait_for_selector("text=Superior Status", timeout=5000)
        page.click("#next-btn")

        # Card 3: Claim to Obedience
        page.wait_for_selector("text=Claim to Obedience", timeout=5000)
        page.click("#next-btn")

        # Card 4: Quiz
        page.wait_for_selector("text=Does a command require a specific behavior?", timeout=5000)
        # Answer Correctly (Yes -> Index 0)
        # Options: ['Yes', 'No']
        page.click("button[data-index='0']")
        page.wait_for_selector("text=Correct!", timeout=5000)

        # Finish
        page.once("dialog", lambda d: d.accept())
        page.click("#next-btn")

        # Verify Return
        page.wait_for_selector("text=Mission 1: Befehlsbegriff", timeout=5000)

        # Check Profile
        page.click("button[data-target='profile']")
        page.wait_for_selector("text=Service Record", timeout=5000)

        # Verify XP
        xp_text = page.locator("p.text-secondary").first.inner_text()
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
