---
title: motion/global-disallowed-list
description: Disallows use of legacy motion Sass APIs.
keywords:
  - stylelint
  - motion
  - motion rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="motion" />

```diff
// Do
+ transition: var(--p-motion-duration-500) var(--p-motion-ease);
// Don't
- duration: $skeleton-shimmer-duration var(--p-motion-ease);
```

<RulePostamble />
