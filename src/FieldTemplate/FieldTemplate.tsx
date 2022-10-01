import { FieldTemplateProps, getTemplate, getUiOptions } from "@rjsf/utils";
import clsx from "clsx";

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  errors,
  help,
  rawDescription,
  classNames,
  disabled,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
}: FieldTemplateProps) => {
  const uiOptions = getUiOptions(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate<"WrapIfAdditionalTemplate">(
    "WrapIfAdditionalTemplate",
    registry,
    uiOptions
  );
  return (
    <WrapIfAdditionalTemplate
      classNames={classNames}
      disabled={disabled}
      id={id}
      label={label}
      onDropPropertyClick={onDropPropertyClick}
      onKeyChange={onKeyChange}
      readonly={readonly}
      required={required}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    >
      <div className="form-group">
        {children}
        {displayLabel && rawDescription && (
          <div className={clsx("form-text", rawErrors.length > 0 ? "text-danger" : "text-muted")}>
            {rawDescription}
          </div>
        )}
        {errors}
        {help}
      </div>
    </WrapIfAdditionalTemplate>
  );
};

export default FieldTemplate;
