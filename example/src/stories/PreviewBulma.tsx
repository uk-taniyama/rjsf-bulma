import type { FC, ReactElement } from "react";
import { useEffect } from "react";
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

const templates: Partial<TemplatesType> = {
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
  const [dummy, setDummy] = useState(false);
  const [customFilesInfo, toggleCustomFilesInfo] =
    useToggleButton("customFilesInfo");
  // NOTE FORCE RENDER!!!
  useEffect(() => {
    setDummy((v) => !v);
  }, [customFilesInfo]);
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
        formContext={{ bulma: { isSmall: dummy ? !isSmall : isSmall } }}
        uiSchema={isSmall ? createIsSmallUiSchema(uiSchema) : uiSchema}
        templates={customFilesInfo ? templates : undefined}
      ></Form>
    </>
  );
};

export default Preview;
