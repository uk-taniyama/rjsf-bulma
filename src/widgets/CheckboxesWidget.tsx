import type { ChangeEvent, FC, FocusEvent } from "react";

import clsx from "clsx";

import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const selectValue = (value: any, selected: any, all: any) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value: any, selected: any) => {
  return selected.filter((v: any) => v !== value);
};

const CheckboxesWidget: FC<WidgetProps> = ({
  id,
  options,
  value,
  autofocus,
  required,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
  formContext,
}) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange =
    (option: any) =>
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
      const all = (enumOptions as any).map(({ value }: any) => value);

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };

  const _onBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);

  return (
    <FieldControl>
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, index: number) => {
          const checked = value.indexOf(option.value) !== -1;
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;

          return (
            <fieldset
              key={option.value}
              disabled={disabled || itemDisabled || readonly}
              className={clsx(inline !== false && "inline")}
            >
              <label className={clsx("checkbox", isSmallClass(formContext))}>
                <input
                  name={id}
                  type="checkbox"
                  checked={checked}
                  required={required}
                  autoFocus={autofocus && index === 0}
                  onChange={_onChange(option)}
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

export default CheckboxesWidget;
