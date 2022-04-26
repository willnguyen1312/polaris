import { AppProvider, Page, Layout, Banner, Card, FormLayout, TextField } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <Page fullWidth>
  <Layout>
    <Layout.Section>
      <Banner title="Order archived" onDismiss={() => {}}>
        <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
      </Banner>
    </Layout.Section>
    <Layout.AnnotatedSection
      id="storeDetails"
      title="Store details"
      description="Shopify and your customers will use this information to contact you."
    >
      <Card sectioned>
        <FormLayout>
          <TextField
            label="Store name"
            onChange={() => {}}
            autoComplete="off"
          />
          <TextField
            type="email"
            label="Account email"
            onChange={() => {}}
            autoComplete="email"
          />
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
  </Layout>
</Page>
    </AppProvider>
  );
}

export default Example;
    