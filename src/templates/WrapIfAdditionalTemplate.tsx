import type { FC } from "react";
import type { WrapIfAdditionalTemplateProps } from "@rjsf/utils";
import { ADDITIONAL_PROPERTY_FLAG } from "@rjsf/utils";
import clsx from "clsx";
import {
  Col,
  FieldControl,
  FieldGroup,
  FieldLabel,
  Row,
  isSmallClass,
} from "../ui";

const WrapIfAdditionalTemplate: FC<WrapIfAdditionalTemplateProps> = ({
  classNames,
  children,
  disabled,
  id,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
}) => {
  const { formContext } = registry;
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = registry.templates.ButtonTemplates;
  const keyLabel = "Key"; // i18n ?
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;

  if (!additional) {
    return <div className={classNames}>{children}</div>;
  }

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    onKeyChange(target.value);
  const keyId = `${id}-key`;

  return (
    <div className={clsx(classNames, "additional-property")}>
      <Row key={keyId}>
        <Col n={3}>
          <div className="additional-property-key">
            <FieldGroup>
              <FieldLabel
                id={keyId}
                label={keyLabel}
                schema={{}}
                required={required}
                formContext={formContext}
              />
              <FieldControl>
                <input
                  className={clsx("input", isSmallClass(formContext))}
                  defaultValue={label}
                  disabled={disabled || readonly}
                  id={keyId}
                  name={keyId}
                  onBlur={!readonly ? handleBlur : undefined}
                  type="text"
                />
              </FieldControl>
            </FieldGroup>
          </div>
        </Col>
        <Col>
          <div className="additional-property-value">{children}</div>
        </Col>
        <Col n="narrow">
          <div className="additional-property-toolbar">
            <RemoveButton
              iconType="block"
              disabled={disabled || readonly}
              onClick={onDropPropertyClick(label)}
              uiSchema={uiSchema}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WrapIfAdditionalTemplate;
