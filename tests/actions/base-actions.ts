import { evaluate } from "taiko";

class BaseActions {
  async clearAllTasks() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await evaluate(() => localStorage.clear());
  }
}

export default new BaseActions();
