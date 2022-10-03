import type { FC } from "react";
import type { IconButtonProps } from "@rjsf/utils";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import clsx from "clsx";

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, className, iconType, uiSchema, ...other } = props;
  return (
    <button
      className={clsx("button is-fullwidth is-small", className)}
      {...other}
    >
      {icon}
    </button>
  );
};

export default IconButton;

export const MoveDownButton: FC<IconButtonProps> = (props) => (
  <IconButton title="Move down" {...props} icon={<AiOutlineArrowDown />} />
);

export const MoveUpButton: FC<IconButtonProps> = (props) => (
  <IconButton title="Move up" {...props} icon={<AiOutlineArrowUp />} />
);

export const RemoveButton: FC<IconButtonProps> = (props) => (
  <IconButton
    title="Remove"
    {...props}
    className="is-danger"
    icon={<IoIosRemove />}
  />
);
