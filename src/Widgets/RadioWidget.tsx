// TODO FIXME radio is-smallが効かない。
// TODO FIXME??? inlineがデフォルト......

import { WidgetProps } from "@rjsf/utils";
import { FieldControl, FieldLabel } from "../ui";

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
  uiSchema,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <FieldLabel
        id={id}
        label={label}
        schema={schema}
        required={required}
        uiSchema={uiSchema}
      />
      <FieldControl>
        {Array.isArray(enumOptions) &&
          enumOptions.map((option) => {
            const itemDisabled =
              Array.isArray(enumDisabled) &&
              enumDisabled.indexOf(option.value) !== -1;
            const checked = option.value == value;

            const radio = (
              <label className="radio is-small is-size-7" key={option.value}>
                <input
                  id={`${id}-${option.value}`}
                  name={id}
                  type="radio"
                  className="mr-1"
                  style={{ verticalAlign: "middle" }}
                  checked={checked}
                  required={required}
                  disabled={disabled || itemDisabled || readonly}
                  value={option.value}
                  onChange={_onChange}
                  onBlur={_onBlur}
                  onFocus={_onFocus}
                />
                {option.label}
              </label>
            );

            return radio;
          })}
      </FieldControl>
    </>
  );
};

export default RadioWidget;
