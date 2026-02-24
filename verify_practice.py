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

        # 1. Verify Practice Navigation
        print("Navigating to Practice Mode...")
        # Check if button exists (it might be labeled 'Üben' now)
        page.click("button[data-target='practice']")
        page.wait_for_selector("h2:has-text('Gefechtsübung')", timeout=5000)
        print("Practice View Loaded.")

        # 2. Start a Sorting Game (30 Years' War)
        print("Starting Sorting Game...")
        # Look for the card with "30-jähriger Krieg"
        # The selector might need to be specific if icons are used
        # Check games-registry title: '30-jähriger Krieg: Chronologie'
        page.click(".module-tile:has-text('30-jähriger Krieg')")

        page.wait_for_selector("text=Chronologie", timeout=5000)
        page.wait_for_selector(".sorting-container", timeout=5000)
        print("Sorting Game Loaded.")

        # 3. Simulate Sorting (This is hard to verify visually without D&D simulation)
        # But we can verify the elements exist
        items = page.locator(".draggable-item")
        count = items.count()
        print(f"Draggable Items: {count}")
        if count != 4:
             raise AssertionError("Incorrect item count for sorting game")

        # 4. Start Drag & Drop Game (NATO)
        page.click("button:has-text('Zurück')")
        page.wait_for_selector("h2:has-text('Gefechtsübung')", timeout=5000)

        print("Starting Drag & Drop Game...")
        page.click(".module-tile:has-text('NATO Struktur')")
        page.wait_for_selector("text=Wer macht was", timeout=5000)

        # Check source and targets
        sources = page.locator(".draggable-source").count()
        targets = page.locator(".drop-target").count()
        print(f"Sources: {sources}, Targets: {targets}")
        if sources != 4 or targets != 4:
             raise AssertionError("Incorrect item count for drag & drop game")

        # 5. Start Cloze Game (Legality)
        page.click("button:has-text('Zurück')")
        page.wait_for_selector("h2:has-text('Gefechtsübung')", timeout=5000)

        print("Starting Cloze Game...")
        page.click(".module-tile:has-text('Rechtmäßigkeit')")
        page.wait_for_selector("input.cloze-input", timeout=5000)

        inputs = page.locator(".cloze-input")
        if inputs.count() != 3:
             raise AssertionError("Incorrect blank count for cloze game")

        # Test Interaction (Fill wrong)
        inputs.first.fill("Test")
        page.click("#check-cloze-btn")
        page.wait_for_selector(".text-warning", timeout=2000) # Feedback

        print("Game Interactions Verified.")
        print("VERIFICATION PASSED")

    except Exception as e:
        print(f"FAILED: {e}")
        raise e
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
