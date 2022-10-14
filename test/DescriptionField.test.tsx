import React from "react";

import renderer from "react-test-renderer";

import DescriptionFieldTemplate from "../src/templates/DescriptionFieldTemplate";

import { mockRegistry } from "./helpers/createMocks";

const registry = mockRegistry();

describe("DescriptionField", () => {
  test("should return null when no description as a props is passed", () => {
    const tree = renderer
      .create(
        <DescriptionFieldTemplate
          id="testid"
          description=""
          registry={registry}
        />
      )
      .toJSON();
    expect(tree).toBe(null);
  });

  test("should return h2 element when description is being passed as props", () => {
    const tree = renderer
      .create(
        <DescriptionFieldTemplate
          id="testid"
          description="SOME THING"
          registry={registry}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
