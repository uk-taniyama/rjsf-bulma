import type { FC } from "react";

import clsx from "clsx";

import { useTextareaWidget } from "../hooks";
import { FieldControl, isSmallClass } from "../ui";

import type { WidgetProps } from "@rjsf/utils";

const TextareaWidget: FC<WidgetProps> = (props) => {
  const {
    id,
    options,
    placeholder,
    autofocus,
    required,
    disabled,
    readonly,
    formContext,
  } = props;
  const { value, hasErrors, onChange, onBlur, onFocus } =
    useTextareaWidget(props);

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
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        autoFocus={autofocus}
        rows={options.rows || 5}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </FieldControl>
  );
};

export default TextareaWidget;
