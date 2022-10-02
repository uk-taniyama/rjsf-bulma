import React from "react";
import CheckboxWidget from "../src/Widgets/CheckboxWidget";
import renderer from "react-test-renderer";
import { makeWidgetMockProps } from "./helpers/createMocks";

describe("CheckboxWidget", () => {
  test("simple", () => {
    const tree = renderer
      .create(<CheckboxWidget {...makeWidgetMockProps({})} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
