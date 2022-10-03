// FIXME checkboxを横並びにしている.....
// FIXME スタイルを強引に当てている.....
import type { FC } from "react";
import { WidgetProps } from "@rjsf/utils";
import { FieldControl } from "../ui";

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
}) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange =
    (option: any) =>
    ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
      const all = (enumOptions as any).map(({ value }: any) => value);

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <FieldControl>
        {Array.isArray(enumOptions) &&
          enumOptions.map((option, index: number) => {
            const checked = value.indexOf(option.value) !== -1;
            const itemDisabled =
              Array.isArray(enumDisabled) &&
              enumDisabled.indexOf(option.value) !== -1;

            return (
              <label
                className="checkbox is-small is-size-7 mr-1"
                key={option.value}
              >
                <input
                  id={`${id}-${option.value}`}
                  name={id}
                  type="checkbox"
                  className="mr-1"
                  style={{ verticalAlign: "middle" }}
                  checked={checked}
                  required={required}
                  disabled={disabled || itemDisabled || readonly}
                  autoFocus={autofocus && index === 0}
                  onChange={_onChange(option)}
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

export default CheckboxesWidget;
