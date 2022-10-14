import { getDefaultRegistry } from "@rjsf/core";
import { createSchemaUtils } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv6";

import Templates from "../../src/templates";
import BaseInputTemplate from "../../src/templates/BaseInputTemplate";

import type { RJSFSchema, WidgetProps } from "@rjsf/utils";

export const mockSchema: RJSFSchema = {
  type: "array",
  items: {
    type: "string",
  },
};

export const mockEventHandlers = (): void => void 0;

export const mockSchemaUtils = createSchemaUtils(validator, mockSchema);

export function mockRegistry() {
  return {
    fields: {},
    widgets: { TextWidget: BaseInputTemplate },
    templates: { ...getDefaultRegistry().templates, ...Templates },
    formContext: {},
    rootSchema: {},
    schemaUtils: mockSchemaUtils,
  };
}

export function makeWidgetMockProps(
  props: Partial<WidgetProps> = {}
): WidgetProps {
  return {
    uiSchema: {},
    schema: mockSchema,
    required: true,
    disabled: false,
    readonly: true,
    autofocus: true,
    label: "Some simple label",
    onChange: mockEventHandlers,
    onBlur: mockEventHandlers,
    onFocus: mockEventHandlers,
    multiple: false,
    rawErrors: [""],
    value: "value",
    options: {},
    formContext: {},
    id: "_id",
    placeholder: "",
    registry: mockRegistry(),
    ...props,
  };
}
