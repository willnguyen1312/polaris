---
title: media-queries/function-disallowed-list
description: Disallows use of legacy breakpoint sass functions.
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
+ @media (min-width: var(--p-breakpoints-md)) {}
// Don't
- @include breakpoint-after(layout-width(page-with-nav)) {}
```

<RulePostamble />
