import { AppProvider, DropZone } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <div style={{width: 50, height: 50}}>
  <DropZone>
    <DropZone.FileUpload />
  </DropZone>
</div>
    </AppProvider>
  );
}

export default Example;
    