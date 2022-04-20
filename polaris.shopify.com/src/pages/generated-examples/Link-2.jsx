import { AppProvider, Link } from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <Link monochrome url="https://help.shopify.com/manual">
  fulfilling orders
</Link>
      </div>
    </AppProvider>
  );
}

export default Example;
    