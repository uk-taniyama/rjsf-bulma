import type { ChangeEvent, FocusEvent } from "react";

import type { WidgetProps } from "@rjsf/utils";
export function useTextareaWidget(props: WidgetProps) {
  const { id, value, options, rawErrors, onChange, onBlur, onFocus } = props;

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const handleBlur = ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
    onBlur(id, value);
  const handleFocus = ({
    target: { value },
  }: FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

  return {
    value: value == null || value === options.emptyValue ? "" : value,
    hasErrors: rawErrors == null ? false : rawErrors.length > 0,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
  };
}
