<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://bulma.io/">
    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
  </a>

  <h3 align="center">rjsf-bulma</h3>

  <p align="center">
  Bluma theme, fields and widgets for <a href="https://github.com/mozilla-services/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <!-- <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/stable/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
   <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Report Bug</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Request Feature</a>
  </p> -->
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project


Exports `bulma` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [Bulma](https://bulma.io/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `bulma >= 0.9.4`
- `@rjsf/core >= 5.0.0`

```bash
yarn add bulma @rjsf/core
```

### Installation

```bash
yarn add rjsf-bulma
```

## Usage

```js
import Form from 'rjsf-bulma';
```

or

```js
import { withTheme } from '@rjsf/core';
import { Theme as BulmaTheme } from '@rjsf/bulma';

const Form = withTheme(BulmaTheme);
```

<!-- CONTRIBUTING -->

## Contributing

Read our [contributors' guide](https://react-jsonschema-form.readthedocs.io/en/stable/contributing/) to get started.

<!-- CONTACT -->

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
