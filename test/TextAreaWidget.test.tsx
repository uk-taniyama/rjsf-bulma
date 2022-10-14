import React from "react";

import renderer from "react-test-renderer";

import TextareaWidget from "../src/widgets/TextareaWidget";

import { makeWidgetMockProps } from "./helpers/createMocks";

describe("TextareaWidget", () => {
  test("simple without errors", () => {
    const tree = renderer
      .create(<TextareaWidget {...makeWidgetMockProps({})} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("simple with errors", () => {
    const tree = renderer
      .create(
        <TextareaWidget
          {...makeWidgetMockProps({ rawErrors: ["Invalid 1", "Invalid 2"] })}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("simple without required", () => {
    const tree = renderer
      .create(<TextareaWidget {...makeWidgetMockProps({ required: false })} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
