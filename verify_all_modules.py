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

        # 1. Verify Practice Module List
        print("Navigating to Practice Mode...")
        page.click("button[data-target='practice']")
        page.wait_for_selector("h2:has-text('Modulwahl')", timeout=5000)

        # Check for ALL expected modules
        expected_modules = [
            "Militärgeschichte",
            "Befehlsrecht",
            "Politische Bildung",
            "Führung im Einsatz",
            "Taktik II"
        ]

        print("Checking for all modules in Practice View...")
        for mod in expected_modules:
            if not page.is_visible(f".module-tile:has-text('{mod}')"):
                # Debug output
                print(page.locator(".module-grid").inner_text())
                raise AssertionError(f"Module '{mod}' missing in Practice View")
            print(f"Verified: {mod}")

        # 2. Enter a newly added module (Führung im Einsatz)
        page.click(".module-tile:has-text('Führung im Einsatz')")
        page.wait_for_selector("h2:has-text('Führung im Einsatz: Übungen')", timeout=5000)

        # Verify specific game exists (Führungsgrundsätze)
        if not page.is_visible("text=Führungsgrundsätze"):
             raise AssertionError("Game 'Führungsgrundsätze' missing")

        # 3. Enter another new module (Taktik II)
        page.click("button:has-text('Zurück')")
        page.wait_for_selector("h2:has-text('Modulwahl')", timeout=5000)
        page.click(".module-tile:has-text('Taktik II')")

        # Verify specific game (Handlungsbedarf)
        page.wait_for_selector("text=Handlungsbedarf", timeout=5000)

        print("All Modules and new Games Verified.")
        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
