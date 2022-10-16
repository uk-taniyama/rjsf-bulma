import type { ChangeEvent, FocusEvent } from "react";

import type { EnumOptionsType, WidgetProps } from "@rjsf/utils";
export function selectValue(
  value: any,
  selected: any | any[],
  enumOptions: EnumOptionsType[]
) {
  if (!Array.isArray(selected)) {
    return [value];
  }
  return enumOptions
    .filter(({ value: v }) => value === v || selected.indexOf(v) !== -1)
    .map(({ value: v }) => v);
}

export function deselectValue(value: any, selected: any | any[]) {
  return selected.filter((v: any) => v !== value);
}

export function useCheckboxesWidget(props: WidgetProps) {
  const {
    id,
    value,
    options,
    disabled: _disabled,
    readonly,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const { enumOptions = [], enumDisabled = [] } = options;

  const getHandleChecked =
    (option: EnumOptionsType) =>
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
      if (checked) {
        onChange(selectValue(option.value, value, enumOptions!));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  const handleBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const handleFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);
  const getCheckboxProps = (option: EnumOptionsType) => {
    const checked = Array.isArray(value) && value.indexOf(option.value) !== -1;
    const disabled =
      _disabled || readonly || enumDisabled.indexOf(option.value) !== -1;
    return {
      checked,
      disabled,
      onChange: getHandleChecked(option),
      onBlur: handleBlur,
      onFocus: handleFocus,
    };
  };

  return {
    enumOptions,
    getCheckboxProps,
  };
}
