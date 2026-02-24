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

        # 1. Verify Practice Root (Module Selection)
        print("Navigating to Practice Mode...")
        page.click("button[data-target='practice']")
        page.wait_for_selector("h2:has-text('Gefechtsübung: Modulwahl')", timeout=5000)
        print("Practice Root Loaded.")

        # Verify Modules are listed (e.g., Militärgeschichte)
        # Note: We rely on games-registry content. '30years' -> 'milhistory'
        if not page.is_visible("text=Militärgeschichte"):
             raise AssertionError("Module 'Militärgeschichte' missing in Practice Root")

        # 2. Select Module (Militärgeschichte)
        print("Selecting Module...")
        page.click(".module-tile:has-text('Militärgeschichte')")

        # Verify Game List for Module
        page.wait_for_selector("h2:has-text('Militärgeschichte: Übungen')", timeout=5000)

        # Verify Games (30 Years War Sorting)
        if not page.is_visible("text=30-jähriger Krieg"):
             raise AssertionError("Game '30-jähriger Krieg' missing in Game List")

        # Verify Back Button works
        page.click("button:has-text('Zurück')")
        page.wait_for_selector("h2:has-text('Modulwahl')", timeout=5000)
        page.click(".module-tile:has-text('Militärgeschichte')") # Go back in

        # 3. Select Game (Sorting)
        print("Starting Game...")
        page.click(".module-tile:has-text('30-jähriger Krieg')")
        page.wait_for_selector(".sorting-container", timeout=5000)

        # Verify Back Button in Game returns to Game List (NOT Root)
        page.click("button:has-text('Zurück')")
        page.wait_for_selector("h2:has-text('Militärgeschichte: Übungen')", timeout=5000)

        print("Navigation Flow Verified.")
        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
