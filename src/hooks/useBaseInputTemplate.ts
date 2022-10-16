import type { ChangeEvent, FocusEvent } from "react";

import { getInputProps } from "@rjsf/utils";

import type { WidgetProps } from "@rjsf/utils";

export function useBaseInputTemplate(props: WidgetProps) {
  const {
    id,
    value,
    readonly,
    disabled,
    autofocus,
    label,
    onBlur,
    onFocus,
    onChange,
    options,
    schema,
    uiSchema,
    formContext,
    registry,
    rawErrors,
    type,
    ...rest
  } = props;
  const inputProps = { ...rest, ...getInputProps(schema, type, options) };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const handleBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const handleFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);

  return {
    inputProps,
    value: value == null ? "" : value,
    hasErrors: rawErrors == null ? false : rawErrors.length > 0,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
  };
}
