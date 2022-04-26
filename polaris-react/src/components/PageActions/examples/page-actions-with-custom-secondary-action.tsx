import { AppProvider, PageActions, Button } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <PageActions
  primaryAction={{
    content: 'Save',
  }}
  secondaryActions={
    <Button
      connectedDisclosure={{
        accessibilityLabel: 'Other save actions',
        actions: [{content: 'Save as draft'}],
      }}
    >
      Save
    </Button>
  }
/>
    </AppProvider>
  );
}

export default Example;
    