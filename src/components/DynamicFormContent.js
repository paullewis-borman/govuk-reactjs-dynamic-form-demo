// src/components/DynamicFormContent.js
import React from 'react';
import { Input, TextArea, Select, Button, GridRow, GridCol, H1, Label, LabelText, Paragraph } from 'govuk-react';
import formStructure from '../form-structure';

// DynamicFormContent component definition
const DynamicFormContent = () => {
  // handleSubmit function: Prevents default form submission behavior
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  // renderField function: Renders form fields based on their type
  const renderField = (field) => {
    switch (field.type) {
      case 'H1':
        // Renders H1 heading
        return <H1>{field.content}</H1>;
      case 'Input':
        // Renders Input field
        return (
          <Input 
            type={field.inputType || 'text'} // Sets input type, defaults to 'text'
            placeholder={field.placeholder} // Sets placeholder text
            required={field.isRequired} // Sets required attribute based on field's 'isRequired' value
          />
        );
      case 'TextArea':
        // Renders TextArea field
        return (
          <TextArea 
            placeholder={field.placeholder} // Sets placeholder text
            required={field.isRequired} // Sets required attribute based on field's 'isRequired' value
          />
        );
      case 'Select':
        // Renders Select dropdown
        return (
          <Select 
            required={field.isRequired} // Sets required attribute based on field's 'isRequired' value
          >
            {field.options.map((option, idx) => (
              <option key={idx} value={option.value}>{option.text}</option> // Maps each option to a dropdown item
            ))}
          </Select>
        );
      case 'Paragraph':
        // Renders Paragraph text
        return <Paragraph>{field.content}</Paragraph>;
      default:
        // Default case to handle unknown types
        return null;
    }
  };

  // Component render method
  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <form onSubmit={handleSubmit}> {/* Form element with onSubmit handler */}
          {formStructure.fields.map((field, index) => (
            <div key={index}> {/* Maps each field in formStructure to a form element */}
              {/* Conditionally renders Label and LabelText for input types */}
              {field.type === 'Input' || field.type === 'TextArea' || field.type === 'Select' ? (
                <Label>
                  <LabelText>{field.label}</LabelText> {/* Renders label text */}
                  {renderField(field)} {/* Renders the form field */}
                </Label>
              ) : (
                renderField(field) // Renders non-input types (like H1, Paragraph) directly
              )}
            </div>
          ))}
          <Button type="submit">{formStructure.submitButtonText}</Button> {/* Render submit button */}
        </form>
      </GridCol>
    </GridRow>
  );
};

export default DynamicFormContent; // Exports the component for use in other parts of the application
