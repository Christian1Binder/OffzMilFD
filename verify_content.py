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
        page.wait_for_selector("text=Dienstvorschriften", timeout=5000)

        # --- VERIFY HISTORY MODULE ---
        page.click("text=Militärgeschichte")
        page.wait_for_selector("text=Frühe Neuzeit & Absolutismus", timeout=5000)

        # Enter Unit: 30 Years' War
        page.click("text=Frühe Neuzeit & Absolutismus")
        page.wait_for_selector("text=30-jähriger Krieg", timeout=5000)

        # Card 1: Trigger (Defenestration)
        print("Card 1: Trigger")
        if not page.is_visible("text=Prager Fenstersturz"):
             raise AssertionError("Card 1 content missing")
        page.click("#next-btn")

        # Card 2: Key Figures (Wallenstein)
        print("Card 2: Key Figures")
        page.wait_for_selector("text=Westfälischer Frieden", timeout=5000)

        # Card 3: Peace
        page.click("#next-btn")
        page.wait_for_selector("text=Absolutismus & Preußen", timeout=5000)

        print("History Module Verified.")

        # Return to Modules
        page.click("button[data-target='modules']")
        page.wait_for_selector("text=Politische Bildung", timeout=5000)

        # --- VERIFY POLITICS MODULE ---
        page.click("text=Politische Bildung")
        page.wait_for_selector("text=Europäische Union", timeout=5000)
        page.click("text=Vereinte Nationen")

        page.wait_for_selector("text=Ziele & Organe", timeout=5000)
        page.click("#next-btn")

        page.wait_for_selector("text=Sicherheitsrat", timeout=5000)
        if not page.is_visible("text=15 Mitglieder"):
             raise AssertionError("Sicherheitsrat content missing")

        print("Politics Module Verified.")
        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
