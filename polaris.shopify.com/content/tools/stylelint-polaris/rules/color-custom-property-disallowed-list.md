---
title: color/custom-property-disallowed-list
description: Disallows use of legacy color custom properties.
keywords:
  - stylelint
  - color
  - color rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="color" />

```diff
// Do
+ color: var(--p-color-text-caution);
// Don't
- color: var(--p-text-warning);
```

<RulePostamble />
