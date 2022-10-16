import type { FC } from "react";

import clsx from "clsx";

import { useCheckboxWidget } from "../hooks";
import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const CheckboxWidget: FC<WidgetProps> = (props) => {
  const {
    id,
    required,
    disabled,
    readonly,
    label,
    schema,
    autofocus,
    formContext,
  } = props;
  const { value, onChange, onBlur, onFocus } = useCheckboxWidget(props);

  const desc = label || schema.description;
  return (
    <FieldControl>
      <fieldset disabled={disabled || readonly}>
        <label className={clsx("checkbox", isSmallClass(formContext))}>
          <input
            id={id}
            name={id}
            type="checkbox"
            checked={value}
            required={required}
            autoFocus={autofocus}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {desc}
        </label>
      </fieldset>
    </FieldControl>
  );
};

export default CheckboxWidget;
