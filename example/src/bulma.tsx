import React from "react";
import { createRoot } from "react-dom/client";
import Preview from "./stories/PreviewBulma";
import SamplePreview from "./stories/SamplePreview";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SamplePreview render={Preview} />
  </React.StrictMode>
);
