import { FC } from 'react';
import Form from '../index';
import validator from '@rjsf/validator-ajv6';
import { samples } from './samples';

import 'bulma';

export const sampleNames = Object.keys(samples);

export interface PreviewProps {
  name: string;
}

export function getSample(name:string) {
  const entry = Object.entries(samples).find(([n, v]) => n === name);
  if (entry==null) {
    return null;
  }
  return entry[1];
}


const Preview: FC<PreviewProps> = ({ name }) => {
  const sample = getSample(name) as any;
  if (sample==null) {
    return <>Not found sample:{name}</>;
  }
  return <Form validator={validator} {...sample}></Form>;
};

export default Preview;
