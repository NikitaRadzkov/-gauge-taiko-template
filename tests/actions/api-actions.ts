import axios from "axios";
import { expect } from "chai";
import baseConstants from "../fixture/base-constants";

class ApiActions {
  async verifyGetRequestStatus(url: string, expectedStatus: number) {
    const res = await axios.get(url);
    expect(res?.status).equal(expectedStatus);
  }

  async verifyPostRequest(responseBody: object) {
    const res = await axios.post(baseConstants.apiURL, {
      body: responseBody,
    });
    expect(res.status).equal(201);
    expect(res.data.body).to.deep.equal(responseBody);
  }
}

export default new ApiActions();
