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
        page.wait_for_selector("text=Field Manuals", timeout=5000)

        # --- VERIFY HISTORY MODULE ---
        page.click("text=Militärgeschichte")
        page.wait_for_selector("text=The 30 Years' War", timeout=5000)

        # Enter Unit: 30 Years' War
        page.click("text=The 30 Years' War")
        page.wait_for_selector("text=Defenestration of Prague", timeout=5000)

        # Card 1: Trigger (Defenestration)
        print("Card 1: Trigger")
        if not page.is_visible("text=Prager Fenstersturz"):
             raise AssertionError("Card 1 content missing")
        page.click("#next-btn")

        # Card 2: Key Figures (Wallenstein)
        print("Card 2: Key Figures")
        page.wait_for_selector("text=Wallenstein", timeout=5000)

        # Card 3: Peace
        page.click("#next-btn")
        page.wait_for_selector("text=Peace of Westphalia", timeout=5000)

        print("History Module Verified.")

        # Return to Modules
        page.click("button[data-target='modules']")
        page.wait_for_selector("text=Politische Bildung", timeout=5000)

        # --- VERIFY POLITICS MODULE ---
        page.click("text=Politische Bildung")
        page.wait_for_selector("text=International Organizations", timeout=5000)
        page.click("text=International Organizations")

        page.wait_for_selector("text=United Nations", timeout=5000)
        page.click("#next-btn")

        page.wait_for_selector("text=NATO", timeout=5000)
        if not page.is_visible("text=Collective Defense"):
             raise AssertionError("NATO content missing")

        print("Politics Module Verified.")
        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
