# rjsf-bulma

[![bulma](https://bulma.io/images/bulma-logo.png)](https://bulma.io/)

Bluma theme, fields and widgets for [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Example](#example)
  - [Typedoc](#typedoc)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## About The Project

Exports `bulma` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [Bulma](https://bulma.io/)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- `@rjsf/core >= 5.0.0`
- `bulma >= 0.9.4`
- `bulma-slider >= ^2.0.5 (for "ui:widget": "range")`

```bash
yarn add @rjsf/core bulma bulma-slider
```

### Installation

```bash
yarn add rjsf-bulma
```

### Example

[Example](example/out/index.html)

### Typedoc

[Typedoc](docs/README.md)


## Usage

```js
import Form from 'rjsf-bulma';
```

or

```js
import { withTheme } from '@rjsf/core';
import { Theme as BulmaTheme } from 'rjsf-bulma';

const Form = withTheme(BulmaTheme);
```

### Use stylesheet

- Use compiled css.

```js
import "rjsf-bulma/dist/index.css";
```

- Use scss (ex. customize color...)

```scss
@import "bulma/bulma.sass";
@import "bulma-slider/dist/css/bulma-slider.min.css";
@import "rjsf-bulma/scss/rjsf-bulma.scss";
```

### Customize FileWidget

- See [example Files](example/out/bulma.html?name=Files) and click "customFilesInfo" button.
- See [source](https://github.com/uk-taniyama/rjsf-bulma/blob/master/example/src/stories/PreviewBulma.tsx#L13), [FilesInfoProps](docs/interfaces/FilesInfoProps.md)

## Contributing

Read our [contributors' guide](https://react-jsonschema-form.readthedocs.io/en/stable/contributing/) to get started.

## Contact

<!-- rjsf team: [https://github.com/orgs/rjsf-team/people](https://github.com/orgs/rjsf-team/people)

GitHub repository: [https://github.com/rjsf-team/react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [build-shield]: https://github.com/rjsf-team/react-jsonschema-form/workflows/CI/badge.svg
[build-url]: https://github.com/rjsf-team/react-jsonschema-form/actions
[contributors-shield]: https://img.shields.io/github/contributors/rjsf-team/react-jsonschema-form.svg
[contributors-url]: https://github.com/rjsf-team/react-jsonschema-form/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/apache-2.0/
[npm-shield]: https://img.shields.io/npm/v/@rjsf/bootstrap-4/latest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rjsf/bootstrap-4
[npm-dl-shield]: https://img.shields.io/npm/dm/@rjsf/bootstrap-4.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/@rjsf/bootstrap-4
[product-screenshot]: https://raw.githubusercontent.com/rjsf-team/react-jsonschema-form/59a8206e148474bea854bbb004f624143fbcbac8/packages/bootstrap-4/screenshot.png -->
