import type { ChangeEvent, FC, FocusEvent } from "react";

import clsx from "clsx";

import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const RadioWidget: FC<WidgetProps> = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
  formContext,
}) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);

  return (
    <FieldControl>
      {Array.isArray(enumOptions) &&
        enumOptions.map((option) => {
          const checked = option.value == value;
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;

          return (
            <fieldset
              key={option.value}
              className="inline"
              disabled={disabled || itemDisabled || readonly}
            >
              <label className={clsx("radio", isSmallClass(formContext))}>
                <input
                  name={id}
                  type="radio"
                  checked={checked}
                  required={required}
                  value={option.value}
                  onChange={_onChange}
                  onBlur={_onBlur}
                  onFocus={_onFocus}
                />
                {option.label}
              </label>
            </fieldset>
          );
        })}
    </FieldControl>
  );
};

export default RadioWidget;
