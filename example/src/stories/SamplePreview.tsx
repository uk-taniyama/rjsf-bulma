import type { FC } from "react";
import { useEffect, useState } from "react";
import { sampleNames } from "./sample";

export interface PreviewProps {
  name: string;
}

export interface SamplePreviewProps {
  render: FC<PreviewProps>;
}

function postName(name: string) {
  if (window.parent != null && window.parent !== window) {
    window.parent.postMessage(name);
  }
}

function listenName(handler: (name: string) => void) {
  if (window.parent == null || window.parent === window) {
    return undefined;
  }
  const listener = (event: MessageEvent) => handler(event.data);
  window.addEventListener("message", listener, false);
  return () => window.removeEventListener("message", listener);
}

const SamplePreview: FC<SamplePreviewProps> = ({ render }) => {
  const [name, setName] = useState(
    new URLSearchParams(location.search).get("name") || ""
  );
  useEffect(() => listenName(setName), [setName]);
  const handleName = (name: string) => () => {
    setName(name);
    postName(name);
  };
  return (
    <>
      <div id="buttons">
        {sampleNames.map((n) => (
          <button key={n} onClick={handleName(n)} disabled={n === name}>
            {n}
          </button>
        ))}
      </div>
      <div style={{ width: 1000, margin: 8 }}>{render({ name })}</div>
    </>
  );
};

export default SamplePreview;
