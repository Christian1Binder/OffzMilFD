from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    device = playwright.devices['iPhone 11']
    context = browser.new_context(**device)
    page = context.new_page()

    try:
        page.goto("http://localhost:8080/index.html")
        page.wait_for_selector("text=TacLearn", timeout=5000)

        # Verify Top Nav
        nav_box = page.locator("#main-nav").bounding_box()
        print(f"Nav Position: {nav_box}")

        # Verify Dashboard
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

        # Verify Unit Content Loop
        # 1. Definition (Card 0)
        page.wait_for_selector("text=Definition", timeout=5000)
        page.click("#next-btn")

        # 2. Checklist (Card 1)
        page.wait_for_selector("text=Checklist", timeout=5000)
        page.click("#next-btn")

        # 3. Legality (Card 2)
        page.wait_for_selector("text=Legality Check", timeout=5000)
        page.click("#next-btn")

        # 4. Quiz (Card 3)
        page.wait_for_selector("text=Must a command be in writing?", timeout=5000)
        page.click("button[data-index='1']")
        page.wait_for_selector("text=Correct!", timeout=5000)

        # Finish
        page.once("dialog", lambda d: d.accept())
        page.click("#next-btn")

        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
