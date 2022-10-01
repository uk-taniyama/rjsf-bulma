import { IconButtonProps } from "@rjsf/utils";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";

import IconButton from '../IconButton';

function AddButton({ uiSchema, ...props }: IconButtonProps) {
  return <IconButton title="Add Item" {...props} className="is-info" icon={<BsPlus />} />;
}

export default AddButton;
