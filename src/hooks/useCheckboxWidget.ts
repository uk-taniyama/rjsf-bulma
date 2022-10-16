import type { ChangeEvent, FocusEvent } from "react";

import type { WidgetProps } from "@rjsf/utils";
export function useCheckboxWidget(props: WidgetProps) {
  const { id, value, onChange, onBlur, onFocus } = props;

  const handleChange = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => onChange(checked);
  const handleBlur = ({ target: { checked } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, checked);
  const handleFocus = ({ target: { checked } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, checked);

  return {
    value: value == null ? false : value,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
  };
}
