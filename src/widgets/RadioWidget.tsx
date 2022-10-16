import type { FC } from "react";

import clsx from "clsx";

import { useRadioWidget } from "../hooks";
import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const RadioWidget: FC<WidgetProps> = (props) => {
  const { id, required, formContext } = props;
  const { enumOptions, isChecked, isDisabled, onChange, onBlur, onFocus } =
    useRadioWidget(props);

  return (
    <FieldControl>
      {enumOptions.map(({ label, value }) => (
        <fieldset key={value} className="inline" disabled={isDisabled(value)}>
          <label className={clsx("radio", isSmallClass(formContext))}>
            <input
              name={id}
              type="radio"
              checked={isChecked(value)}
              required={required}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            {label}
          </label>
        </fieldset>
      ))}
    </FieldControl>
  );
};

export default RadioWidget;
