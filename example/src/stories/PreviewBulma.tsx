import type { FC, ReactElement } from "react";
import { useMemo } from "react";
import { useCallback, useState } from "react";
import type { FilesInfoProps } from "rjsf-bulma";
import Form, { createIsSmallUiSchema } from "rjsf-bulma";
import validator from "@rjsf/validator-ajv6";
import { getSample } from "./sample";
import type { TemplatesType } from "@rjsf/utils";
import clsx from "clsx";

import "rjsf-bulma/scss/bulma.scss";

const CustomFilesInfoTemplate: FC<FilesInfoProps> = (props) => {
  return (
    <pre
      style={{
        overflow: "scroll",
        wordBreak: "break-all",
        width: "100%",
        maxWidth: "80vw",
      }}
    >
      {JSON.stringify(props)}
    </pre>
  );
};

const customTemplates: Partial<TemplatesType> = {
  FilesInfoTemplate: CustomFilesInfoTemplate,
};

export interface PreviewProps {
  name: string;
}

function useToggleButton(id: string): [boolean, ReactElement] {
  const [state, setState] = useState(false);
  const handleClick = useCallback(() => setState((v) => !v), []);
  return [
    state,
    <button
      key={id}
      id={id}
      className={clsx("button is-small is-primary mr-1", state && "is-active")}
      onClick={handleClick}
    >
      {id} {state ? "ON" : "off"}
    </button>,
  ];
}

const Preview: FC<PreviewProps> = ({ name }) => {
  const [isSmall, toggleIsSmall] = useToggleButton("isSmall");
  const [customFilesInfo, toggleCustomFilesInfo] =
    useToggleButton("customFilesInfo");
  const formContext = useMemo(
    () => ({
      bulma: {
        // form is-small or not.
        isSmall,
        // NOTE NO re-rendering on template update.
        // NOTE -> Set to force a re-render on template update.
        dummy: customFilesInfo,
      },
    }),
    [isSmall, customFilesInfo]
  );

  const header = (
    <div>
      {toggleIsSmall}
      {toggleCustomFilesInfo}
    </div>
  );
  const sample = getSample(name) as any;
  if (sample == null) {
    return (
      <>
        {header}Not found sample:{name}
      </>
    );
  }
  const { uiSchema, ...rest } = sample;
  return (
    <>
      {header}
      <Form
        validator={validator}
        {...rest}
        formContext={formContext}
        uiSchema={isSmall ? createIsSmallUiSchema(uiSchema) : uiSchema}
        templates={customFilesInfo ? customTemplates : undefined}
      ></Form>
    </>
  );
};

export default Preview;
