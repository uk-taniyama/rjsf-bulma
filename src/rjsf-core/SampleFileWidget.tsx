// copy from @rjsf/core 4adf86a1a633ae25fbeae2f9ca3e419716e5a3d2
import type { WidgetProps } from "@rjsf/utils";
import { FilesInfo } from "./FilesInfo";
import { useFileWidget } from "./useFileWidget";


/**
 *  The `FileWidget` is a widget for rendering file upload fields.
 *  It is typically used with a string property with data-url format.
 */
 function FileWidget<T, F>(props: WidgetProps<T, F>) {
  const { id, readonly, disabled, autofocus, multiple, options } = props;
  const { handleChange, filesInfo } = useFileWidget(props);

  return (
    <div>
      <p>
        <input
          id={id}
          name={id}
          type="file"
          disabled={readonly || disabled}
          onChange={handleChange}
          defaultValue=""
          autoFocus={autofocus}
          multiple={multiple}
          accept={options.accept ? String(options.accept) : undefined}
        />
      </p>
      <FilesInfo filesInfo={filesInfo} />
    </div>
  );
}

export default FileWidget;
