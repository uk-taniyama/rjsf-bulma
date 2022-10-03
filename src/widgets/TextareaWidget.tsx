import type { FC } from "react";
import { WidgetProps } from "@rjsf/utils";
import { FieldControl } from "../ui";

const TextareaWidget: FC<WidgetProps> = ({
  id,
  options,
  value,
  placeholder,
  autofocus,
  required,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
}) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

  return (
    <>
      <FieldControl>
        <textarea
          id={id}
          name={id}
          className="textarea is-small"
          value={value == null || value === options.emptyValue ? "" : value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          autoFocus={autofocus}
          rows={options.rows || 5}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
        />
      </FieldControl>
    </>
  );
};

export default TextareaWidget;
