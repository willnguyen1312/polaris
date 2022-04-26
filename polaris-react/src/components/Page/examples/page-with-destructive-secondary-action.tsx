import { AppProvider, Page } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <Page
  title="General"
  secondaryActions={[{content: 'Delete', destructive: true}]}
>
  <p>Page content</p>
</Page>
    </AppProvider>
  );
}

export default Example;
    