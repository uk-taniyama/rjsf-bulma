import { FC, useState } from "react";
import { sampleNames } from "./sample";

export interface PreviewProps {
  name: string;
}

export interface SamplePreviewProps {
  render: FC<PreviewProps>;
}

function sendName(name: string) {
  if (window.parent != null && window.parent !== window) {
    window.parent.postMessage(name);
  }
}

let receiveName: (name: string) => void = () => {};

window.addEventListener(
  "message",
  (event) => {
    receiveName(event.data);
  },
  false
);

const SamplePreview: FC<SamplePreviewProps> = ({ render }) => {
  const [name, setName] = useState("");
  receiveName = setName;
  const handleName = (name: string) => () => {
    setName(name);
    sendName(name);
  };
  return (
    <>
      <div id="buttons">
        {sampleNames.map((n) => (
          <button key={n} onClick={handleName(n)}>
            {n}
          </button>
        ))}
      </div>
      <div style={{ width: 1000, margin: 8 }}>{render({ name })}</div>
    </>
  );
};

export default SamplePreview;
