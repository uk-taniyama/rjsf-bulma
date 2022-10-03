import type { FC } from "react";
import type {
  ArrayFieldTemplateItemType,
  ArrayFieldTemplateProps,
} from "@rjsf/utils";
import { getTemplate, getUiOptions } from "@rjsf/utils";
import { Col, Row } from "../ui";

const ArrayFieldTemplate: FC<ArrayFieldTemplateProps> = (props) => {
  const {
    canAdd,
    disabled,
    idSchema,
    uiSchema,
    items,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const ArrayFieldDescriptionTemplate =
    getTemplate<"ArrayFieldDescriptionTemplate">(
      "ArrayFieldDescriptionTemplate",
      registry,
      uiOptions
    );
  const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate">(
    "ArrayFieldItemTemplate",
    registry,
    uiOptions
  );
  const ArrayFieldTitleTemplate = getTemplate<"ArrayFieldTitleTemplate">(
    "ArrayFieldTitleTemplate",
    registry,
    uiOptions
  );
  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;
  return (
    <>
      <Row>
        <Col>
          <ArrayFieldTitleTemplate
            idSchema={idSchema}
            title={uiOptions.title || title}
            uiSchema={uiSchema}
            required={required}
            registry={registry}
          />
        </Col>
      </Row>
      {(uiOptions.description || schema.description) && (
        <Row>
          <Col>
            <ArrayFieldDescriptionTemplate
              idSchema={idSchema}
              description={(uiOptions.description || schema.description)!}
              uiSchema={uiSchema}
              registry={registry}
            />
          </Col>
        </Row>
      )}
      {items &&
        items.map(({ key, ...itemProps }: ArrayFieldTemplateItemType) => (
          <Row key={key}>
            <Col>
              <ArrayFieldItemTemplate key={key} {...itemProps} />
            </Col>
          </Row>
        ))}
      {canAdd && (
        <Row>
          <Col></Col>
          <Col n="narrow">
            <AddButton
              className="array-item-add"
              onClick={onAddClick}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default ArrayFieldTemplate;
