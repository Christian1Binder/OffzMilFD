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

        # Go to Modules
        page.click("button[data-target='modules']")

        # 1. Verify Grid Layout
        # Check if .module-grid exists
        grid = page.locator(".module-grid")
        grid.wait_for()

        # Check computed style for grid (basic check)
        display = grid.evaluate("element => getComputedStyle(element).display")
        if display != "grid":
            raise AssertionError(f"Module container is not grid, it is {display}")
        print("Grid Layout Verified.")

        # 2. Verify Content Depth (Militärgeschichte)
        page.click(".module-tile:has-text('Militärgeschichte')")
        page.wait_for_selector("text=The 30 Years' War", timeout=5000)

        # Enter Unit
        page.click("text=The 30 Years' War")
        page.wait_for_selector("#unit-content", timeout=5000)

        # Count clicks to finish (Depth Check)
        clicks = 0
        while True:
            # Check content of current card
            if page.is_visible("text=Quick Check"):
                print("Quiz found at step", clicks + 1)

            btn = page.locator("#next-btn")
            btn_text = btn.inner_text()

            if btn_text == "Finish Mission":
                print("Reached Finish Button")
                break

            btn.click()
            clicks += 1
            page.wait_for_timeout(100) # Small delay for transition

        print(f"Cards navigated: {clicks}")
        if clicks < 4:
             raise AssertionError("Content depth too shallow (expected > 4 cards)")

        # 3. Verify Quiz at End
        # We look for the quiz container class '.quiz-card' or specific text
        # Use page.locator to find if it exists in DOM and is visible
        if not page.locator(".quiz-card").is_visible():
             # Debug content
             print("Current Card Content:")
             print(page.locator("#unit-content").inner_text())
             raise AssertionError("Final card is not a Quiz")

        print("Quiz at end verified.")
        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
