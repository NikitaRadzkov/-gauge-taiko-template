import * as assert from "assert";
import { Step } from "gauge-ts";
import { write, press, text, into, textBox, setViewPort } from "taiko";

export default class MobileTests {
  @Step("Open todo application with mobile direction <width> and <height>")
  async openTodoMobileDirection(width: string, height: string) {
    await setViewPort({ width: Number(width), height: Number(height) });
  }

  @Step("Add mobile task <item>")
  async addMobileTask(item: string) {
    await write(item, into(textBox("What needs to be done?")));
    await press("Enter");
  }

  @Step("Must mobile display <message>")
  async mustMobileDisplay(message: string) {
    assert.ok(await text(message).exists(0, 0));
  }
}
