---
title: media-queries/media-queries-allowed-list
description: Allows declaration of `print` and `screen` `@media` queries, allows `@media` queries for `forced-colors` and `ms-high-contrast` features, allows `@media` queries using Polaris breakpoints.
keywords:
  - stylelint
  - media queries
  - media queries rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="media" />

```diff
// Do
+ @include @media #{$p-breakpoints-sm-up} {}
// Don't
- @include @media #{$my-var} {}
```

<RulePostamble />
