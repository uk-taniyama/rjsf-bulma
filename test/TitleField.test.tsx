import React from "react";

import renderer from "react-test-renderer";

import TitleFieldTemplate from "../src/templates/TitleFieldTemplate";

import { mockRegistry } from "./helpers/createMocks";

describe("TitleField", () => {
  test("simple", () => {
    const registry = mockRegistry();
    const tree = renderer
      .create(
        <TitleFieldTemplate id="testid" title="Hello" registry={registry} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
