import { $ } from "taiko";

class BasePage {
  get newTodoInput() {
    return $(".new-todo");
  }

  getTodoByIndex(index = 1) {
    return $(`//*[@class='todo-list']/li[${index}]`);
  }
}

export default new BasePage();
