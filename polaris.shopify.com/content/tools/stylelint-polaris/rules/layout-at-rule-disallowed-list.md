---
title: layout/at-rule-disallowed-list
description: Disallows use of legacy Sass mixins.
keywords:
  - stylelint
  - layout
  - layout rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="layout" />

```diff
// Do
+ @media print {
+   display: none;
+ }
// Don't
- @include print-hidden;
```

<RulePostamble />
