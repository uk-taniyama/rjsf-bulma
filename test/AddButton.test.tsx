import React from "react";

import renderer from "react-test-renderer";

import { AddButton } from "../src/templates/ButtonTemplates";

describe("AddButton", () => {
  test("simple", () => {
    const tree = renderer
      .create(
        <AddButton
          className="someClass"
          onClick={() => void 0}
          disabled={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
