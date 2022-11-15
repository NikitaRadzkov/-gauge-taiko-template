import { Step } from "gauge-ts";
import { write, press, text, into, textBox, setViewPort, goto } from "taiko";
import BaseActions from "../actions/base-actions";

export default class MobileTests {
  @Step("Open mobile todo application")
  async openTodoApp() {
    await goto("todo.taiko.dev");
  }
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
    BaseActions.assertOk(await text(message).exists(0, 0));
  }
}
