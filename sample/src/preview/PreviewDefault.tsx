import type { FC } from "react";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv6";

import { getSample } from "./sample";

import "./bootstrap.scss";

export interface PreviewProps {
  name: string;
}

const Preview: FC<PreviewProps> = ({ name }) => {
  const sample = getSample(name) as any;
  if (sample == null) {
    return <>Not found sample:{name}</>;
  }
  return <Form validator={validator} {...sample}></Form>;
};

export default Preview;
