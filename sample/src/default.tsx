import React from "react";

import { createRoot } from "react-dom/client";

import Preview from "./preview/PreviewDefault";
import SamplePreview from "./preview/SamplePreview";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SamplePreview render={Preview} />
  </React.StrictMode>
);
