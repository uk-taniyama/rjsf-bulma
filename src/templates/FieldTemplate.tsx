import type { FC } from "react";
import { FieldTemplateProps, getTemplate, getUiOptions } from "@rjsf/utils";
import clsx from "clsx";
import { FieldGroup } from "../ui";

const FieldTemplate: FC<FieldTemplateProps> = ({
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
}) => {
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
      <FieldGroup>
        {children}
        {displayLabel && rawDescription && (
          <div
            className={clsx("is-size-7", rawErrors.length > 0 && "is-danger")}
          >
            {rawDescription}
          </div>
        )}
        {errors}
        {help}
      </FieldGroup>
    </WrapIfAdditionalTemplate>
  );
};

export default FieldTemplate;
