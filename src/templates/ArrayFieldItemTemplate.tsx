import type { FC } from "react";
import type { ArrayFieldTemplateItemType } from "@rjsf/utils";
import { Col, Row } from "../ui";

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
  const { MoveDownButton, MoveUpButton, RemoveButton } =
    registry.templates.ButtonTemplates;
  return (
    <Row>
      <Col>{children}</Col>
      <Col n="narrow">
        {hasToolbar && (
          <div className="field has-addons pl-2">
            <p className="control">
              <MoveUpButton
                className="array-item-move-up"
                disabled={disabled || readonly || !hasMoveUp}
                onClick={onReorderClick(index, index - 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control">
              <MoveDownButton
                disabled={disabled || readonly || !hasMoveDown}
                onClick={onReorderClick(index, index + 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control">
              <RemoveButton
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
