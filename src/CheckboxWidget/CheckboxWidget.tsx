import { WidgetProps } from "@rjsf/utils";
import { FieldGroup, FieldControl } from "../ui";

const CheckboxWidget = (props: WidgetProps) => {
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
    <FieldGroup>
      <FieldControl>
        <label>
          <input
            id={id}
            name={id}
            checked={typeof value === "undefined" ? false : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={_onChange}
            type="checkbox"
            onBlur={_onBlur}
            onFocus={_onFocus}
          />
          {desc}
        </label>
      </FieldControl>
    </FieldGroup>
  );
};

export default CheckboxWidget;
