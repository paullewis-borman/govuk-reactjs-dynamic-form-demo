// src/form-structure.js
const formStructure = {
    fields: [
      {
        type: "H1",
        content: "Pizza Order Form"
      },
      {
        type: "Paragraph",
        content: "Choose the size for your pizza."
      },
      {
        id: "sizeSmall",
        label: "Small",
        type: "Radio",
        name: "pizzaSize",
        value: "small",
        isRequired: true
      },
      {
        id: "sizeMedium",
        label: "Medium",
        type: "Radio",
        name: "pizzaSize",
        value: "medium",
        isRequired: true
      },
      {
        id: "sizeLarge",
        label: "Large",
        type: "Radio",
        name: "pizzaSize",
        value: "large",
        isRequired: true
      },
      {
        type: "Paragraph",
        content: ""
      },
      // ... You can continue adding other form fields here as needed
    ],
    submitButtonText: "Place Order"
  };
  
  export default formStructure;
  