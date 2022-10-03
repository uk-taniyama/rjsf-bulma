import type { FC } from "react";
import { useState } from "react";
import Form, { createIsSmallUiSchema } from "../../src/index";
import validator from "@rjsf/validator-ajv6";
import { getSample } from "./sample";

import "../../scss/bulma.scss";

export interface PreviewProps {
  name: string;
}

const Preview: FC<PreviewProps> = ({ name }) => {
  const [isSmall, setIsSmall] = useState(false);
  const header = (
    <div>
      <button id="isSmall" onClick={() => setIsSmall((v) => !v)}>
        {isSmall ? "isSmall" : "!isSmall"}
      </button>
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
        formContext={{ bulma: { isSmall } }}
        uiSchema={isSmall ? createIsSmallUiSchema(uiSchema) : uiSchema}
      ></Form>
    </>
  );
};

export default Preview;
