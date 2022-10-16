import type { FC } from "react";

import clsx from "clsx";

import { useCheckboxesWidget } from "../hooks";
import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const CheckboxesWidget: FC<WidgetProps> = (props) => {
  const {
    id,
    required,
    autofocus,
    formContext,
    options: { inline },
  } = props;
  const { enumOptions, getCheckboxProps } = useCheckboxesWidget(props);
  return (
    <FieldControl>
      {enumOptions.map((option, index) => {
        const { checked, disabled, onChange, onBlur, onFocus } =
          getCheckboxProps(option);

        return (
          <fieldset
            key={option.value}
            disabled={disabled}
            className={clsx(inline !== false && "inline")}
          >
            <label className={clsx("checkbox", isSmallClass(formContext))}>
              <input
                name={id}
                type="checkbox"
                checked={checked}
                required={required}
                autoFocus={autofocus && index === 0}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
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
