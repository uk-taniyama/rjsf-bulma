import type { FC } from "react";

import clsx from "clsx";

import { Col, Row, isSmallClass } from "../ui";

import type { ArrayFieldTemplateItemType } from "@rjsf/utils";

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
      {hasToolbar && (
        <Col n="narrow">
          <div className="field has-addons array-toolbar">
            <p className="control">
              <MoveUpButton
                className={clsx("array-item-up", buttonClassName)}
                disabled={disabled || readonly || !hasMoveUp}
                onClick={onReorderClick(index, index - 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control">
              <MoveDownButton
                className={clsx("array-item-down", buttonClassName)}
                disabled={disabled || readonly || !hasMoveDown}
                onClick={onReorderClick(index, index + 1)}
                uiSchema={uiSchema}
              />
            </p>
            <p className="control">
              <RemoveButton
                className={clsx("array-item-remove", buttonClassName)}
                disabled={disabled || readonly || !hasRemove}
                onClick={onDropIndexClick(index)}
                uiSchema={uiSchema}
              />
            </p>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default ArrayFieldItemTemplate;
