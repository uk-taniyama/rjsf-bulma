import type { FC } from "react";

import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import clsx from "clsx";

import IconButton from "./IconButton";

import type { IconButtonProps } from "@rjsf/utils";

export const AddButton: FC<IconButtonProps> = ({ className, ...props }) => (
  <IconButton
    title="Add Item"
    {...props}
    className={clsx(className, "is-info")}
    icon={<FaPlus />}
  />
);

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
