import type { FC } from "react";

import clsx from "clsx";

import type { IconButtonProps } from "@rjsf/utils";

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, className, iconType, uiSchema, ...other } = props;
  return (
    <button className={clsx("button", className)} {...other}>
      {icon}
    </button>
  );
};

export default IconButton;
