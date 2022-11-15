import * as assert from "assert";

class BaseActions {
  assertOk(condition: unknown) {
    assert.ok(condition);
  }
}

export default new BaseActions();
