// FIXME checkboxを横並びにしている.....
// FIXME スタイルを強引に当てている.....
import type { FC } from "react";
import type { WidgetProps } from "@rjsf/utils";
import { FieldControl } from "../ui";

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
        <label className="checkbox is-small is-size-7 mr-1">
          <input
            id={id}
            name={id}
            type="checkbox"
            className="mr-1"
            style={{ verticalAlign: "middle" }}
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
