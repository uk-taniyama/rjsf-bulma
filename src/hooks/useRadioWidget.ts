import type { ChangeEvent, FocusEvent } from "react";

import type { WidgetProps } from "@rjsf/utils";
export function useRadioWidget(props: WidgetProps) {
  const {
    id,
    schema,
    value,
    disabled,
    readonly,
    options,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const { enumOptions = [], enumDisabled = [] } = options;

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(schema.type === "boolean" ? value !== "false" : value);
  const handleBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const handleFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);

  return {
    enumOptions,
    isChecked: (v: any) => value == v,
    isDisabled: (v: any) =>
      disabled || readonly || enumDisabled.indexOf(v) !== -1,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
  };
}
