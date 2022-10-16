import type { FC } from "react";

import clsx from "clsx";

import { useSelectWidget } from "../hooks";
import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const SelectWidget: FC<WidgetProps> = (props) => {
  const {
    id,
    schema,
    multiple,
    placeholder,
    autofocus,
    required,
    disabled,
    readonly,
    formContext,
  } = props;
  const {
    value,
    hasErrors,
    enumOptions,
    isDisabled,
    onChange,
    onBlur,
    onFocus,
  } = useSelectWidget(props);

  return (
    <FieldControl>
      <div
        className={clsx(
          "select is-fullwidth",
          isSmallClass(formContext),
          multiple && "is-multiple",
          hasErrors && "is-danger"
        )}
      >
        <select
          id={id}
          name={id}
          value={value}
          required={required}
          multiple={multiple}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {!multiple && schema.default === undefined && (
            <option value="">{placeholder}</option>
          )}
          {enumOptions.map(({ value, label }) => (
            <option key={value} value={value} disabled={isDisabled(value)}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </FieldControl>
  );
};

export default SelectWidget;
