
[![Build status — Travis-CI][travis-icon]][travis]
[![Husky Git hooks][husky-icon]][husky]
[![js-semistandard-style][semi-icon]][semi]
[![License][license-icon]][mit]
[![Vulnerability test][snyk-icon]][snyk]
<!-- [![Accessibility test - QA passes][pa11y-icon]][pa11y-ci] -->
<!-- [![GitLab pipeline status][gitlab-icon]][gitlab] -->
<!-- [![... - on Npmjs][npm-icon]][npm] -->

# iet-ou/QA

Rulesets for PHPMD and other quality assurance resources.

Originally for APPLAuD.

## Install ... build ... test

### PHP

```sh
composer install
composer build
composer test
composer execute
composer hook pre-commit
```

### Javascript / Node

```sh
npm i
npm run build
npm test
npm run fix
```


---
© 2018 Nick Freear. © 2016 The Open University (IET).

[MIT]: https://nfreear.mit-license.org/2016-2018#!-QA "MIT License | © Nick Freear."
[mit-txt]: https://nfreear.mit-license.org/2016-2018/license.txt "MIT License | © Nick Freear."
[license-icon]: https://nick.freear.org.uk/badge/mit.svg
[license-i0]: https://img.shields.io/npm/l/iet-ou--qa.svg
[travis]: https://travis-ci.org/nfreear/QA "Build status – Travis-CI"
[travis-icon]: https://travis-ci.org/nfreear/QA.svg?branch=master
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://nick.freear.org.uk/badge/semi.svg "Javascript coding style — semistandard"
[sem-i0]: https://img.shields.io/badge/code_style-semistandard-brightgreen.svg?_style=flat-square
[snyk]: https://snyk.io/test/npm/gaad-widget "Vulnerability count ~ via Snyk"
[snyk-icon]: https://snyk.io/test/npm/gaad-widget/badge.svg
[pa11y-ci]: https://github.com/pa11y/pa11y-ci "Automated accessibility testing - via 'pa11y-ci'"
[pa11y-icon]: https://nick.freear.org.uk/badge/pa11y-ci.svg
[pa11y-i0]: https://img.shields.io/badge/accessibility-pa11y--ci-blue.svgå
[husky]: https://npmjs.com/package/husky "Git hooks made easy 🐶"
[husky-icon]: https://nick.freear.org.uk/badge/husky.svg
[husky-i0]: https://img.shields.io/badge/git--hook-husky-ff69b4.svg
