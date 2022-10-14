import React from "react";

import validator from "@rjsf/validator-ajv6";
import renderer from "react-test-renderer";

import Form from "../src/index";

import type { RJSFSchema } from "@rjsf/utils";

describe("AdditionalProperties tests", () => {
  test("show add button and fields if additionalProperties is true", () => {
    const schema: RJSFSchema = {
      additionalProperties: true,
    };
    const formData: any = {
      additionalProperty: "should appear",
    };
    const tree = renderer
      .create(
        <Form schema={schema} validator={validator} formData={formData} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
