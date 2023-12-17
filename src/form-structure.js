// src/form-structure.js
const formStructure = {
    fields: [
      {
        type: "H1",
        content: "Dynamically generated address form"
      },
      {
        type: "Paragraph",
        content: "Please provide details of the address you would like to add to the reference data store."
      },
      {
        id: "addressLine1",
        label: "Address Line 1",
        type: "Input",
        placeholder: "Enter the first line of your address",
        isRequired: true
      },
      {
        type: "Paragraph",
        content: ""
      },
      {
        id: "addressLine2",
        label: "Address Line 2",
        type: "Input",
        placeholder: "Enter the second line of your address",
        isRequired: false
      },
      {
        type: "Paragraph",
        content: ""
      },
      {
        id: "addressLine3",
        label: "Address Line 3",
        type: "Input",
        placeholder: "Enter the third line of your address",
        isRequired: false
      },
      {
        type: "Paragraph",
        content: ""
      },
      {
        id: "city",
        label: "City",
        type: "Input",
        placeholder: "Enter your city",
        isRequired: true
      },
      {
        type: "Paragraph",
        content: ""
      },
      {
        id: "postalCode",
        label: "Postal Code",
        type: "Input",
        placeholder: "Enter your postal code",
        isRequired: true
      },
      {
        type: "Paragraph",
        content: ""
      },
      // Additional fields can be added here as needed
    ],
    submitButtonText: "Submit"
};

export default formStructure;
