import type { ChangeEvent, FC, FocusEvent } from "react";

import { processSelectValue } from "@rjsf/utils";
import clsx from "clsx";

import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const SelectWidget: FC<WidgetProps> = ({
  id,
  schema,
  options,
  value,
  multiple,
  placeholder,
  autofocus,
  required,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
  formContext,
  rawErrors = [],
}) => {
  const { enumOptions, enumDisabled } = options;

  const emptyValue = multiple ? [] : "";

  function getValue(
    event: FocusEvent<HTMLSelectElement> | ChangeEvent<HTMLSelectElement>,
    multiple?: boolean
  ) {
    if (multiple) {
      return [].slice
        .call(event.target.options as any)
        .filter((o: any) => o.selected)
        .map((o: any) => o.value);
    } else {
      return event.target.value;
    }
  }

  return (
    <>
      <FieldControl>
        <div
          className={clsx(
            "select is-fullwidth",
            isSmallClass(formContext),
            multiple && "is-multiple",
            rawErrors.length && "is-danger"
          )}
        >
          <select
            id={id}
            name={id}
            value={value == null ? emptyValue : value}
            required={required}
            multiple={multiple}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onBlur={
              onBlur &&
              ((event) => {
                const newValue = getValue(event, multiple);
                onBlur(id, processSelectValue(schema, newValue, options));
              })
            }
            onFocus={
              onFocus &&
              ((event) => {
                const newValue = getValue(event, multiple);
                onFocus(id, processSelectValue(schema, newValue, options));
              })
            }
            onChange={(event) => {
              const newValue = getValue(event, multiple);
              onChange(processSelectValue(schema, newValue, options));
            }}
          >
            {!multiple && schema.default === undefined && (
              <option value="">{placeholder}</option>
            )}
            {(enumOptions as any).map(({ value, label }: any, i: number) => {
              const disabled: any =
                Array.isArray(enumDisabled) &&
                enumDisabled.indexOf(value) != -1;
              return (
                <option key={i} value={value} disabled={disabled}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
      </FieldControl>
    </>
  );
};

export default SelectWidget;
