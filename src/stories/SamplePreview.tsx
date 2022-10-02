import { FC, useState } from "react";
import { sampleNames } from "./sample";

export interface PreviewProps {
  name: string;
}

export interface SamplePreviewProps {
  render: FC<PreviewProps>;
}

const SamplePreview: FC<SamplePreviewProps> = ({ render }) => {
  const [name, setName] = useState("");
  return (
    <>
      <div id="buttons">
        {sampleNames.map((n) => (
          <button key={n} onClick={() => setName(n)}>
            {n}
          </button>
        ))}
      </div>
      <div style={{ width: 1000, margin: 8 }}>{render({ name })}</div>
    </>
  );
};

export default SamplePreview;
