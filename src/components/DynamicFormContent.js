// src/components/DynamicFormContent.js
import React, { useState } from 'react';
import { Input, TextArea, Select, Button, GridRow, GridCol, H1, Label, LabelText, Paragraph, Checkbox, Radio, Fieldset } from 'govuk-react';
import formStructure from '../form-structure';

const DynamicFormContent = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, checked, isFieldset) => {
    if (isFieldset) {
      const [fieldsetId, checkboxId] = id.split('.');
      setFormData(prev => ({
        ...prev,
        [fieldsetId]: {
          ...prev[fieldsetId],
          [checkboxId]: checked
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [id]: checked }));
    }
  };

  const handleRadioChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
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

  const renderField = (field, fieldsetId = null) => {
    const fullId = fieldsetId ? `${fieldsetId}.${field.id}` : field.id;
    const fieldValue = fieldsetId ? formData[fieldsetId]?.[field.id] : formData[field.id];

    switch (field.type) {
      case 'H1':
        return <H1 key={fullId}>{field.content}</H1>;
      case 'Paragraph':
        return <Paragraph key={fullId}>{field.content}</Paragraph>;
      case 'Input':
        return (
          <Input
            key={fullId}
            id={fullId}
            type={field.inputType || 'text'}
            placeholder={field.placeholder}
            required={field.isRequired}
            value={fieldValue}
            onChange={e => handleInputChange(fullId, e.target.value)}
          />
        );
      case 'TextArea':
        return (
          <TextArea
            key={fullId}
            id={fullId}
            placeholder={field.placeholder}
            required={field.isRequired}
            value={fieldValue}
            onChange={e => handleInputChange(fullId, e.target.value)}
          />
        );
      case 'Select':
        return (
          <Select
            key={fullId}
            id={fullId}
            required={field.isRequired}
            value={fieldValue}
            onChange={e => handleInputChange(fullId, e.target.value)}
          >
            {field.options && field.options.map((option, idx) => (
              <option key={idx} value={option.value}>{option.text}</option>
            ))}
          </Select>
        );
      case 'Checkbox':
        return (
          <Checkbox
            key={fullId}
            id={fullId}
            required={field.isRequired}
            checked={!!fieldValue}
            onChange={e => handleCheckboxChange(fullId, e.target.checked, !!fieldsetId)}
          >
            {field.label}
          </Checkbox>
        );
      case 'Radio':
        return (
          <Radio
            key={fullId}
            id={fullId}
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
          <Fieldset key={field.id} legend={field.legend}>
            {field.fields.map(subField => renderField(subField, field.id))}
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
