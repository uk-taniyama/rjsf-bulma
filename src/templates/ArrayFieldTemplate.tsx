import type { FC } from "react";
import {
  ArrayFieldTemplateItemType,
  ArrayFieldTemplateProps,
  getTemplate,
  getUiOptions,
} from "@rjsf/utils";
import { Row, Col } from "../ui";

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
      <Row><Col n={12}>
        <ArrayFieldTitleTemplate
          idSchema={idSchema}
          title={uiOptions.title || title}
          uiSchema={uiSchema}
          required={required}
          registry={registry}
        />
      </Col></Row>
      {(uiOptions.description || schema.description) && (
        <Row><Col n={12}>
          <ArrayFieldDescriptionTemplate
            idSchema={idSchema}
            description={(uiOptions.description || schema.description)!}
            uiSchema={uiSchema}
            registry={registry}
          />
        </Col></Row>
      )}
      {items &&
        items.map(({ key, ...itemProps }: ArrayFieldTemplateItemType) => (
          <Row key={key}>
            <Col n={12}>
              <ArrayFieldItemTemplate key={key} {...itemProps} />
            </Col>
          </Row>
        ))}
      {canAdd && (
        <Row>
          <Col n={9}></Col>
          <Col n={3}>
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
