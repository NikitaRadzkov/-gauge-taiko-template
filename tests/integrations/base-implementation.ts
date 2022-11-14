import { goto, openBrowser, closeBrowser } from "taiko";
import { BeforeSuite, AfterSuite } from "gauge-ts";

const headless = process.env.headless_chrome.toLowerCase() === "true";

export default class BaseStepDefinition {
  @BeforeSuite()
  async specSetup() {
    await openBrowser({
      headless,
    });
    await goto("todo.taiko.dev");
  }

  @AfterSuite()
  async specCleanUp() {
    await closeBrowser();
  }
}
