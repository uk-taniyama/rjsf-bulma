import type { ChangeEvent, FocusEvent } from "react";

import { processSelectValue } from "@rjsf/utils";

import type { WidgetProps } from "@rjsf/utils";
export function useSelectWidget(props: WidgetProps) {
  const {
    id,
    schema,
    multiple,
    options,
    value,
    rawErrors,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const { enumOptions = [], enumDisabled = [] } = options;
  const emptyValue = multiple ? [] : "";

  function getValue(
    event: FocusEvent<HTMLSelectElement> | ChangeEvent<HTMLSelectElement>
  ) {
    if (multiple) {
      return Array.from(event.target.options)
        .filter((o) => o.selected)
        .map((o) => o.value);
    } else {
      return event.target.value;
    }
  }

  const isDisabled = (value: any) => enumDisabled.indexOf(value) !== -1;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(processSelectValue(schema, getValue(event), options));
  };
  const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
    onBlur(id, processSelectValue(schema, getValue(event), options));
  };
  const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
    onFocus(id, processSelectValue(schema, getValue(event), options));
  };

  return {
    value: value == null ? emptyValue : value,
    hasErrors: rawErrors == null ? false : rawErrors.length > 0,
    enumOptions,
    isDisabled,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
  };
}
