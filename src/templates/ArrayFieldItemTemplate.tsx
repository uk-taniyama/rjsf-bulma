import type { FC } from "react";
import type { ArrayFieldTemplateItemType } from "@rjsf/utils";
import { Col, Row, isSmallClass } from "../ui";

const ArrayFieldItemTemplate: FC<ArrayFieldTemplateItemType> = (props) => {
  const {
    children,
    disabled,
    hasToolbar,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    index,
    onDropIndexClick,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
  } = props;
  const { formContext } = registry;
  const buttonClassName = isSmallClass(formContext);
  const { MoveDownButton, MoveUpButton, RemoveButton } =
    registry.templates.ButtonTemplates;
  return (
    <Row>
      <Col>
        <div className="array-value">{children}</div>
      </Col>
      <Col n="narrow">
        {hasToolbar && (
          <div className="field has-addons array-toolbar">
            <p className="control">
              <MoveUpButton
                className={buttonClassName}
                disabled={disabled || readonly || !hasMoveUp}
                onClick={onReorderClick(index, index - 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control">
              <MoveDownButton
                className={buttonClassName}
                disabled={disabled || readonly || !hasMoveDown}
                onClick={onReorderClick(index, index + 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control">
              <RemoveButton
                className={buttonClassName}
                disabled={disabled || readonly || !hasRemove}
                onClick={onDropIndexClick(index)}
                uiSchema={uiSchema}
              />
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ArrayFieldItemTemplate;
