---
title: typography/function-disallowed-list
description: Disallows use of legacy Sass typography functions.
keywords:
  - stylelint
  - typography
  - typography rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="typography" />

```diff
// Do
+ <Text variant="headingXs" as="p" />
// Do
+ font-size: var(--p-font-size-300);
// Don't
- font-size: font-size('caption');
```

<RulePostamble />
