import { processSelectValue, WidgetProps } from "@rjsf/utils";
import clsx from "clsx";
import { FieldLabel, FieldControl } from "../ui";

const SelectWidget = ({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  rawErrors = [],
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const emptyValue = multiple ? [] : "";

  function getValue(
    event: React.FocusEvent | React.ChangeEvent | any,
    multiple?: boolean
  ) {
    if (multiple) {
      return [].slice
        .call(event.target.options as any)
        .filter((o: any) => o.selected)
        .map((o: any) => o.value);
    } else {
      return event.target.value;
    }
  }

  return (
    <>
      <FieldLabel id={id} label={label} schema={schema} required={required} />
      <FieldControl>
        <div
          className={clsx(
            "select is-small is-fullwidth",
            rawErrors.length && "is-danger"
          )}
        >
          <select
            id={id}
            name={id}
            value={value == null ? emptyValue : value}
            required={required}
            multiple={multiple}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onBlur={
              onBlur &&
              ((event: React.FocusEvent) => {
                const newValue = getValue(event, multiple);
                onBlur(id, processSelectValue(schema, newValue, options));
              })
            }
            onFocus={
              onFocus &&
              ((event: React.FocusEvent) => {
                const newValue = getValue(event, multiple);
                onFocus(id, processSelectValue(schema, newValue, options));
              })
            }
            onChange={(event: React.ChangeEvent) => {
              const newValue = getValue(event, multiple);
              onChange(processSelectValue(schema, newValue, options));
            }}
          >
            {!multiple && schema.default === undefined && (
              <option value="">{placeholder}</option>
            )}
            {(enumOptions as any).map(({ value, label }: any, i: number) => {
              const disabled: any =
                Array.isArray(enumDisabled) &&
                (enumDisabled as any).indexOf(value) != -1;
              return (
                <option key={i} id={label} value={value} disabled={disabled}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
      </FieldControl>
    </>
  );
};

export default SelectWidget;
