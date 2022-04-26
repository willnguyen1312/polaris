import { AppProvider, DisplayText } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <DisplayText size="large">Good evening, Dominic.</DisplayText>
    </AppProvider>
  );
}

export default Example;
    