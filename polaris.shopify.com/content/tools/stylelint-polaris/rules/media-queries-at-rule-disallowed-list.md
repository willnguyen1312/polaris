---
title: media-queries/at-rule-disallowed-list
description: Disallows use of legacy breakpoint Sass mixins.
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
+ @media (max-width: var(--p-breakpoints-md)) {}
// Don't
- @include breakpoint-before(layout-width(page-with-nav)) {}
```

<RulePostamble />
