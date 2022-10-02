import type { FC } from "react";
import {
  canExpand,
  getTemplate,
  getUiOptions,
  ObjectFieldTemplateProps,
} from "@rjsf/utils";
import { Row, Col } from "../ui";

const ObjectFieldTemplate: FC<ObjectFieldTemplateProps> = ({
  description,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
  schema,
  formData,
  onAddClick,
  disabled,
  readonly,
  registry,
}) => {
  const uiOptions = getUiOptions(uiSchema);
  const TitleFieldTemplate = getTemplate<"TitleFieldTemplate">(
    "TitleFieldTemplate",
    registry,
    uiOptions
  );
  const DescriptionFieldTemplate = getTemplate<"DescriptionFieldTemplate">(
    "DescriptionFieldTemplate",
    registry,
    uiOptions
  );
  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;
  return (
    <>
      {(uiOptions.title || title) && (
        <TitleFieldTemplate
          id={`${idSchema.$id}-title`}
          title={uiOptions.title || title}
          required={required}
          registry={registry}
          uiSchema={uiSchema}
        />
      )}
      {(uiOptions.description || description) && (
        <DescriptionFieldTemplate
          id={`${idSchema.$id}-description`}
          description={uiOptions.description || description!}
          registry={registry}
        />
      )}
      <div>
        {properties.map((element: any, index: number) => (
          <Row key={index}>
            <Col n={12}> {element.content}</Col>
          </Row>
        ))}
        {canExpand(schema, uiSchema, formData) ? (
          <Row>
            <Col n={9}></Col>
            <Col n={3}>
              <AddButton
                onClick={onAddClick(schema)}
                disabled={disabled || readonly}
                className="object-property-expand"
                uiSchema={uiSchema}
              />
            </Col>
          </Row>
        ) : null}
      </div>
    </>
  );
};

export default ObjectFieldTemplate;
