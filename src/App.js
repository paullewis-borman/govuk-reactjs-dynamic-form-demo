// Importing components from govuk-react library
import { Page, H1, Input, Paragraph,Footer, Checkbox,Radio } from 'govuk-react';

// Importing DynamicFormContent component from components directory
// This is the component that will display the dynamic form based on the form structure specified in form-structure.js
// In practice we would retrieve the form structure from an API endpoint based upon the form request type we need
import DynamicFormContent from './components/DynamicFormContent.js';

// Defining App component
function App() {
  // Returning JSX to be rendered
  return (
    // Page component from govuk-react to create a page layout
    <Page>
      <DynamicFormContent />
    <Footer />
    </Page>
  )
}

// Exporting App component as default export
export default App;