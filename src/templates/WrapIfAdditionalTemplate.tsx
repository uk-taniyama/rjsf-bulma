import type { FC } from "react";
import type { FormContext, WrapIfAdditionalTemplateProps } from "@rjsf/utils";
import { ADDITIONAL_PROPERTY_FLAG } from "@rjsf/utils";
import clsx from "clsx";
import {
  Col,
  FieldBody,
  FieldControl,
  FieldGroup,
  FieldLabel,
  Row,
  isHorizontal,
  isSmallClass,
} from "../ui";

type AdditionalPropertyKeyTemplateProps = Pick<
  WrapIfAdditionalTemplateProps,
  "id" | "label" | "required" | "disabled" | "readonly" | "onKeyChange"
> & {
  formContext?: FormContext;
};

const AdditionalPropertyKeyTemplate: FC<AdditionalPropertyKeyTemplateProps> = ({
  id,
  label,
  required,
  disabled,
  readonly,
  onKeyChange,
  formContext,
}) => {
  const keyId = `${id}-key`;
  const keyLabel = "Additional Key"; // i18n ?
  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    onKeyChange(target.value);
  return (
    <FieldGroup formContext={formContext}>
      <FieldLabel
        id={keyId}
        label={keyLabel}
        schema={{}}
        required={required}
        formContext={formContext}
      />
      <FieldBody formContext={formContext}>
        <FieldControl>
          <input
            type="text"
            className={clsx("input", isSmallClass(formContext))}
            id={keyId}
            name={keyId}
            defaultValue={label}
            disabled={disabled}
            readOnly={readonly}
            onBlur={!readonly ? handleBlur : undefined}
          />
        </FieldControl>
      </FieldBody>
    </FieldGroup>
  );
};

const WrapIfAdditionalTemplate: FC<WrapIfAdditionalTemplateProps> = ({
  classNames,
  children,
  disabled,
  id,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  schema,
  uiSchema,
  registry,
}) => {
  const { formContext } = registry;
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = registry.templates.ButtonTemplates;
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;

  if (!additional) {
    return <div className={classNames}>{children}</div>;
  }
  const keyEl = (
    <AdditionalPropertyKeyTemplate
      id={id}
      label={label}
      required={true}
      disabled={disabled}
      readonly={readonly}
      onKeyChange={onKeyChange}
      formContext={formContext}
    />
  );
  const buttonEl = (
    <RemoveButton
      className={clsx("object-property-remove", isSmallClass(formContext))}
      disabled={disabled || readonly}
      onClick={onDropPropertyClick(label)}
      uiSchema={uiSchema}
    />
  );

  if (isHorizontal(formContext)) {
    return (
      <div className={clsx(classNames, "additional-property")}>
        <Row>
          <Col>
            <Row>
              <Col>{keyEl}</Col>
            </Row>
            <Row>
              <Col>{children}</Col>
            </Row>
          </Col>
          <Col n="narrow">{buttonEl}</Col>
        </Row>
      </div>
    );
  }

  return (
    <div className={clsx(classNames, "additional-property")}>
      <Row>
        <Col n={3}>{keyEl}</Col>
        <Col>{children}</Col>
        <Col n="narrow">{buttonEl}</Col>
      </Row>
    </div>
  );
};

export default WrapIfAdditionalTemplate;
