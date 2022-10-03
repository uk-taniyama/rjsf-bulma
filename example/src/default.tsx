import React from 'react';
import { createRoot } from 'react-dom/client';
import Preview from 'rjsf-bulma/stories/PreviewDefault';
import SamplePreview from 'rjsf-bulma/stories/SamplePreview';
import 'rjsf-bulma/stories/bootstrap.scss';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SamplePreview render={Preview} />
  </React.StrictMode>,
);
