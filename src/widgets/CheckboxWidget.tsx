// FIXME checkboxを横並びにしている.....
import type { FC } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { FieldControl, isSmallClass } from "../ui";
import clsx from "clsx";

const CheckboxWidget: FC<WidgetProps> = (props) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    schema,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    formContext,
  } = props;

  const _onChange = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onBlur(id, checked);
  const _onFocus = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, checked);

  const desc = label || schema.description;
  return (
    <>
      <FieldControl>
        <label className={clsx("checkbox", isSmallClass(formContext))}>
          <input
            id={id}
            name={id}
            type="checkbox"
            checked={value == null ? false : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={_onChange}
            onBlur={_onBlur}
            onFocus={_onFocus}
          />
          {desc}
        </label>
      </FieldControl>
    </>
  );
};

export default CheckboxWidget;
