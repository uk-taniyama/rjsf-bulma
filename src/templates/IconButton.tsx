import type { FC } from "react";
import type { IconButtonProps } from "@rjsf/utils";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import clsx from "clsx";

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, className, iconType, uiSchema, ...other } = props;
  return (
    <button className={clsx("button", className)} {...other}>
      {icon}
    </button>
  );
};

export default IconButton;

export const MoveDownButton: FC<IconButtonProps> = (props) => (
  <IconButton title="Move down" {...props} icon={<FaArrowDown />} />
);

export const MoveUpButton: FC<IconButtonProps> = (props) => (
  <IconButton title="Move up" {...props} icon={<FaArrowUp />} />
);

export const RemoveButton: FC<IconButtonProps> = ({ className, ...props }) => (
  <IconButton
    title="Remove"
    {...props}
    className={clsx(className, "is-danger")}
    icon={<FaMinus />}
  />
);
