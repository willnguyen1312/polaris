---
title: space/declaration-property-unit-disallowed-list
description: Disallows use of hard-coded px, em, and rem values on gap, margin, and padding properties.
keywords:
  - stylelint
  - space
  - space rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="space" />

```diff
// Do
+ gap: var(--p-space-050);
+ margin: var(--p-space-300) 0;
// Don't
- gap: 2px;
- margin: 12px  0;
```

<RulePostamble />
