import axios from "axios";
import { expect } from "chai";
import { Step } from "gauge-ts";
import apiActions from "../actions/api-actions";
import baseConstants from "../fixture/base-constants";

export default class ApiTests {
  @Step("GET request with url <url>")
  async getRequestWithUrl(url: string) {
    apiActions.verifyGetRequestStatus(url, 200);
  }

  @Step("GET requset with post id <id>")
  async getRequsetWithPostId(id: string) {
    const res = await axios?.get(`${baseConstants.apiURL}/${id}`);
    expect(res.data.id).equal(1);
  }

  @Step("GET request with params <limit> and <page>")
  async getRequestWithParams(limit: string, page: string) {
    const res = await axios?.get(baseConstants.apiURL, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    expect(res.data.length).equal(10);
  }

  @Step("POST request create new post with <title> and <body> and <userId>")
  async postRequestWithParas(title: string, body: string, userId: string) {
    const responseBody = { title, body, userId };
    apiActions.verifyPostRequest(responseBody);
  }
}
