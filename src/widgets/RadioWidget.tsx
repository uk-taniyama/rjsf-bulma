// TODO FIXME??? inlineがデフォルト......
import type { FC } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { FieldControl, isSmallClass } from "../ui";
import clsx from "clsx";

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

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <FieldControl>
        {Array.isArray(enumOptions) &&
          enumOptions.map((option) => {
            const itemDisabled =
              Array.isArray(enumDisabled) &&
              enumDisabled.indexOf(option.value) !== -1;
            const checked = option.value == value;

            return (
              <label
                key={option.value}
                className={clsx("radio", isSmallClass(formContext))}
              >
                <input
                  id={`${id}-${option.value}`}
                  name={id}
                  type="radio"
                  checked={checked}
                  required={required}
                  disabled={disabled || itemDisabled || readonly}
                  value={option.value}
                  onChange={_onChange}
                  onBlur={_onBlur}
                  onFocus={_onFocus}
                />
                {option.label}
              </label>
            );
          })}
      </FieldControl>
    </>
  );
};

export default RadioWidget;
