import { AppProvider, Banner } from "@shopify/polaris";
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
        <Banner
  title="Some of your product variants are missing weights"
  status="warning"
  action={{content: 'Edit variant weights', url: ''}}
  secondaryAction={{content: 'Learn more', url: ''}}
  onDismiss={() => {}}
>
  <p>
    Add weights to show accurate rates at checkout and when buying shipping
    labels in Shopify.
  </p>
</Banner>
      </div>
    </AppProvider>
  );
}

export default Example;
    