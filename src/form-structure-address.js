// src/form-structure.js
const formStructure = {
    fields: [
      {
        type: "H1",
        content: "Address form"
      },
      {
        label: "Name",
        id: "name",
        type: "Input",
        placeholder: "Enter your name",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "Address Line 1",
        type: "Input",
        id: "addressLine1",
        placeholder: "Enter the first line of your address",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "Address Line 2",
        type: "Input",
        id: "addressLine2",
        placeholder: "Enter the second line of your address",
        isRequired: false
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "Address Line 3",
        type: "Input",
        id: "addressLine3",
        placeholder: "Enter the third line of your address",
        isRequired: false
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "City",
        type: "Input",
        id: "city",
        placeholder: "Enter your city",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "Postal Code",
        type: "Input",
        id: "postalCode",
        placeholder: "Enter your postal code",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      // Additional fields can be added here as needed
    ],
    submitButtonText: "Submit"
  };
  
  export default formStructure;