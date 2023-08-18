import React from 'react';

import type {ComplexAction} from '../../../../types';
import {buttonsFrom} from '../../../Button';
import {Box} from '../../../Box';
import {InlineStack} from '../../../InlineStack';
import {useFeatures} from '../../../../utilities/features';

export interface FooterProps {
  /** Primary action */
  primaryAction?: ComplexAction;
  /** Collection of secondary actions */
  secondaryActions?: ComplexAction[];
  /** The content to display inside modal */
  children?: React.ReactNode;
}

export function Footer({
  primaryAction,
  secondaryActions,
  children,
}: FooterProps) {
  const {polarisSummerEditions2023} = useFeatures();

  const primaryActionButton =
    (primaryAction && buttonsFrom(primaryAction, {primary: true})) || null;
  const secondaryActionButtons =
    (secondaryActions && buttonsFrom(secondaryActions)) || null;
  const actions =
    primaryActionButton || secondaryActionButtons ? (
      <InlineStack gap="2">
        {secondaryActionButtons}
        {primaryActionButton}
      </InlineStack>
    ) : null;

  return (
    <InlineStack gap="4" blockAlign="center">
      <Box
        borderColor={polarisSummerEditions2023 ? 'border' : 'border-subdued'}
        borderBlockStartWidth="1"
        minHeight={polarisSummerEditions2023 ? undefined : 'var(--p-space-16)'}
        padding="4"
        paddingInlineStart={polarisSummerEditions2023 ? undefined : '5'}
        paddingInlineEnd={polarisSummerEditions2023 ? undefined : '5'}
        width="100%"
      >
        <InlineStack gap="4" blockAlign="center" align="space-between">
          <Box>{children}</Box>
          {actions}
        </InlineStack>
      </Box>
    </InlineStack>
  );
}
