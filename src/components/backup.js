// src/components/DynamicFormContent.js
import React, { useState } from 'react';
import { Input, TextArea, Select, Button, GridRow, GridCol, H1, Label, LabelText, Paragraph, Checkbox, Radio, Fieldset } from 'govuk-react';
import formStructure from '../form-structure';

const DynamicFormContent = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, checked) => {
    setFormData(prev => ({ ...prev, [id]: checked }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      console.log('Form Submitted:', formData);
    } else {
      console.log('Form has validation errors');
      form.reportValidity();
    }
  };

  const renderField = (field) => {
    const fieldValue = formData[field.id] || '';

    switch (field.type) {
      case 'H1':
        return <H1 key={field.id}>{field.content}</H1>;
      case 'Paragraph':
        return <Paragraph key={field.id}>{field.content}</Paragraph>;
      case 'Input':
        return (
          <Label key={field.id} htmlFor={field.id}>
            <LabelText>{field.label}</LabelText>
            <Input
              id={field.id}
              type={field.inputType || 'text'}
              placeholder={field.placeholder}
              required={field.isRequired}
              value={fieldValue}
              onChange={e => handleInputChange(field.id, e.target.value)}
            />
          </Label>
        );
      case 'TextArea':
        return (
          <Label key={field.id} htmlFor={field.id}>
            <LabelText>{field.label}</LabelText>
            <TextArea
              id={field.id}
              placeholder={field.placeholder}
              required={field.isRequired}
              value={fieldValue}
              onChange={e => handleInputChange(field.id, e.target.value)}
            />
          </Label>
        );
      case 'Select':
        return (
          <Label key={field.id} htmlFor={field.id}>
            <LabelText>{field.label}</LabelText>
            <Select
              id={field.id}
              required={field.isRequired}
              value={fieldValue}
              onChange={e => handleInputChange(field.id, e.target.value)}
            >
              {field.options.map((option, idx) => (
                <option key={idx} value={option.value}>{option.text}</option>
              ))}
            </Select>
          </Label>
        );
      case 'Checkbox':
        return (
          <Checkbox
            key={field.id}
            id={field.id}
            required={field.isRequired}
            checked={!!fieldValue}
            onChange={e => handleCheckboxChange(field.id, e.target.checked)}
          >
            {field.label}
          </Checkbox>
        );
      case 'Radio':
        return (
          <Radio
            key={field.id}
            id={field.id}
            name={field.name}
            required={field.isRequired}
            checked={formData[field.name] === field.value}
            onChange={e => handleRadioChange(field.name, field.value)}
          >
            {field.label}
          </Radio>
        );
      case 'Fieldset':
        return (
          <Fieldset key={field.id}>
            <Fieldset.Legend>{field.legend}</Fieldset.Legend>
            {field.fields.map(subField => renderField(subField))}
          </Fieldset>
        );
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
              {renderField(field)}
            </div>
          ))}
          <Button type="submit">{formStructure.submitButtonText}</Button>
        </form>
      </GridCol>
    </GridRow>
  );
};

export default DynamicFormContent;
