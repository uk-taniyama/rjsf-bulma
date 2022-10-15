import type { ChangeEvent, FC, FocusEvent } from "react";

import clsx from "clsx";

import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

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
  rawErrors,
  formContext,
}) => {
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
    onBlur(id, value);
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
    onFocus(id, value);

  const hasErrors = rawErrors && rawErrors.length > 0;

  return (
    <FieldControl>
      <textarea
        id={id}
        name={id}
        className={clsx(
          "textarea",
          isSmallClass(formContext),
          hasErrors && "is-danger"
        )}
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
  );
};

export default TextareaWidget;
