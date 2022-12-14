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
          schema={{}}
          id="testid"
          description=""
          registry={registry}
        />
      )
      .toJSON();
    expect(tree).toBe(null);
  });

  test("should return element when description is being passed as props", () => {
    const tree = renderer
      .create(
        <DescriptionFieldTemplate
          schema={{}}
          id="testid"
          description="SOME THING"
          registry={registry}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should return element when description is being passed as props for object", () => {
    const tree = renderer
      .create(
        <DescriptionFieldTemplate
          schema={{ type: "object" }}
          id="testid"
          description="SOME THING"
          registry={registry}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
