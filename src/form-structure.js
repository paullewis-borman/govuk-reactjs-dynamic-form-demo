// src/form-structure.js
const formStructure = {
  fields: [
    {
      type: "H1",
      content: "Dynamically generated pizza toppings form"
    },
    {
      type: "Paragraph",
      content: "Select your preferred pizza toppings."
    },
    {
      id: "pizzatoppings",
      type: "Fieldset",
      legend: "Toppings",
      fields: [
        {
          id: "pepperoni",
          label: "Pepperoni",
          type: "Checkbox",
          isRequired: false
        },
        {
          id: "ham",
          label: "Ham",
          type: "Checkbox",
          isRequired: false
        },
        {
          id: "mushroom",
          label: "Mushroom",
          type: "Checkbox",
          isRequired: false
        },
        {
          id: "greenChilli",
          label: "Green Chilli",
          type: "Checkbox",
          isRequired: false
        },
        {
          id: "extraMozzarella",
          label: "Extra Mozzarella",
          type: "Checkbox",
          isRequired: false
        }
      ]
    },
    // Additional fields can be added here as needed
  ],
  submitButtonText: "Submit Order"
};

export default formStructure;
