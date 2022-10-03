import React from 'react';
import { createRoot } from 'react-dom/client';
import Preview from 'rjsf-bulma/stories/PreviewBulma';
import SamplePreview from 'rjsf-bulma/stories/SamplePreview';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SamplePreview render={Preview} />
  </React.StrictMode>,
);
