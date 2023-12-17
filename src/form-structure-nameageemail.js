// src/form-structure.js
const formStructure = {
    fields: [
      {
        type: "H1",
        content: "Dynamically Generated Personal Details Form"
      },
      {
        label: "First and last name",
        type: "Input",
        placeholder: "Enter your name",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "Age",
        type: "Input",
        inputType: "number",
        placeholder: "Enter your age",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        label: "Email Address",
        type: "Input",
        inputType: "email",
        placeholder: "Enter your email address",
        isRequired: true
      },
      {
        type: "Paragraph",
        content:""
      },
      {
        type: "TextArea",
        label: "Description of your reference data request"
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
  