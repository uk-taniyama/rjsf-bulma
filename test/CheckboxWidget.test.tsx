import React from "react";

import renderer from "react-test-renderer";

import CheckboxWidget from "../src/widgets/CheckboxWidget";

import { makeWidgetMockProps } from "./helpers/createMocks";

describe("CheckboxWidget", () => {
  test("simple", () => {
    const tree = renderer
      .create(<CheckboxWidget {...makeWidgetMockProps({})} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
