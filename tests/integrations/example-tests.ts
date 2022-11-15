import { write, press, click, checkBox, toLeftOf, link, text, into, goto, evaluate } from "taiko";
import BaseActions from "../actions/base-actions";
import BasePage from "../pages/base-page";
import { Step, Table } from "gauge-ts";

export default class ExampleTests {
  @Step("Open todo application")
  async openTodoApp() {
    await goto("todo.taiko.dev");
  }

  @Step("Add task <item>")
  async addTask(item: string) {
    await write(item, into(BasePage.newTodoInput));
    await press("Enter");
  }

  @Step("View <type> tasks")
  async viewTypeTasks(type: string) {
    await click(link(type));
  }

  @Step("Complete tasks <table>")
  async completeTasks(table: Table) {
    for (const row of table.getTableRows()) {
      await click(checkBox(toLeftOf(row.getCellValues()[0])));
    }
  }

  @Step("Clear all tasks")
  async cleatAllTasks() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await evaluate(() => localStorage.clear());
  }

  @Step("Must not have <table>")
  async mustNotHave(table: Table) {
    for (const row of table.getTableRows()) {
      BaseActions.assertOk(!(await text(row.getCellValues()[0]).exists(0, 0)));
    }
  }

  @Step("Must display <message>")
  async mustDisplayMessage(message: string) {
    BaseActions.assertOk(await text(message).exists(0, 0));
  }

  @Step("Add tasks <table>")
  async addTasksTable(table: Table) {
    for (const row of table.getTableRows()) {
      await write(row.getCellValues()[0]);
      await press("Enter");
    }
  }

  @Step("Must have <table>")
  async mustHaveTable(table: Table) {
    for (const row of table.getTableRows()) {
      BaseActions.assertOk(await text(row.getCellValues()[0]).exists());
    }
  }
}
