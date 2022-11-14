import { write, press, click, checkBox, toLeftOf, link, text, into } from "taiko";
import * as assert from "assert";
import baseActions from "../actions/base-actions";
import basePage from "../pages/base-page";
import { Step, Table } from "gauge-ts";

export default class ExampleTests {
  @Step("Add task <item>")
  async addTask(item: string) {
    await write(item, into(basePage.newTodoInput));
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
    baseActions.clearAllTasks();
  }

  @Step("Must not have <table>")
  async mustNotHave(table: Table) {
    for (const row of table.getTableRows()) {
      assert.ok(!(await text(row.getCellValues()[0]).exists(0, 0)));
    }
  }

  @Step("Must display <message>")
  async mustDisplayMessage(message: string) {
    assert.ok(await text(message).exists(0, 0));
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
      assert.ok(await text(row.getCellValues()[0]).exists());
    }
  }
}
