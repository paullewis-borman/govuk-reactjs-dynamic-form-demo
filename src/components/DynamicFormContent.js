// src/components/DynamicFormContent.js
import React, { useState } from 'react';
import { Input, TextArea, Select, Button, GridRow, GridCol, H1, Label, LabelText, Paragraph } from 'govuk-react';
import formStructure from '../form-structure';

const DynamicFormContent = () => {
  // State to store form field values
  const [formData, setFormData] = useState({});

  // Update form data state when input changes
  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // handleSubmit function: Prevents default form submission behavior and checks if form is valid
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      console.log('Form Submitted:', formData); // Replace with actual submission logic
    } else {
      console.log('Form has validation errors');
      form.reportValidity(); // This will show the native HTML validation messages
    }
  };

  // renderField function: Renders form fields based on their type
  const renderField = (field) => {
    const fieldValue = formData[field.id] || '';

    switch (field.type) {
      case 'H1':
        return <H1 key={field.id}>{field.content}</H1>;
      case 'Input':
        return (
          <Input
            key={field.id}
            id={field.id}
            type={field.inputType || 'text'}
            placeholder={field.placeholder}
            required={field.isRequired}
            value={fieldValue}
            onChange={e => handleInputChange(field.id, e.target.value)}
          />
        );
      case 'TextArea':
        return (
          <TextArea
            key={field.id}
            id={field.id}
            placeholder={field.placeholder}
            required={field.isRequired}
            value={fieldValue}
            onChange={e => handleInputChange(field.id, e.target.value)}
          />
        );
      case 'Select':
        return (
          <Select
            key={field.id}
            id={field.id}
            required={field.isRequired}
            value={fieldValue}
            onChange={e => handleInputChange(field.id, e.target.value)}
          >
            {field.options && field.options.map((option, idx) => (
              <option key={idx} value={option.value}>{option.text}</option>
            ))}
          </Select>
        );
      case 'Paragraph':
        return <Paragraph key={field.id}>{field.content}</Paragraph>;
      default:
        return null;
    }
  };

  return (
    <GridRow>
      <GridCol setWidth="two-thirds">
        <form onSubmit={handleSubmit} noValidate>
          {formStructure.fields.map((field, index) => (
            <div key={index}>
              {field.type === 'Input' || field.type === 'TextArea' || field.type === 'Select' ? (
                <Label htmlFor={field.id}>
                  <LabelText>{field.label}</LabelText>
                  {renderField(field)}
                </Label>
              ) : (
                renderField(field)
              )}
            </div>
          ))}
          <Button type="submit">{formStructure.submitButtonText}</Button>
        </form>
      </GridCol>
    </GridRow>
  );
};

export default DynamicFormContent;
