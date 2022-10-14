import { useCallback, useMemo, useState } from "react";
import type { FC, ReactElement } from "react";

import validator from "@rjsf/validator-ajv6";
import clsx from "clsx";
import Form, { createIsSmallUiSchema } from "rjsf-bulma";

import { getSample } from "./sample";

import type { FormContext, TemplatesType } from "@rjsf/utils";
import type { FilesInfoTemplateProps } from "rjsf-bulma";

import "rjsf-bulma/scss/bulma.scss";

const CustomFilesInfoTemplate: FC<FilesInfoTemplateProps> = (props) => {
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
  const [isHorizontal, toggleIsHorizontal] = useToggleButton("isHorizontal");
  const [customFilesInfo, toggleCustomFilesInfo] =
    useToggleButton("customFilesInfo");
  const formContext: FormContext = useMemo(
    () => ({
      bulma: {
        // form is-small or not.
        isSmall,
        isHorizontal,
        // NOTE NO re-rendering on template update.
        // NOTE -> Set to force a re-render on template update.
        dummy: customFilesInfo,
      },
    }),
    [isSmall, isHorizontal, customFilesInfo]
  );

  const header = (
    <div>
      {toggleIsSmall}
      {toggleIsHorizontal}
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
