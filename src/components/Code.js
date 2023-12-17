import React from 'react';
import PropTypes from 'prop-types';

// Code component to display JSON data
const Code = ({ jsonData }) => {
  // Function to format JSON data for readability
  const formatJson = (data) => {
    try {
      return JSON.stringify(data, null, 2); // Pretty print JSON
    } catch (error) {
      console.error("Failed to format JSON:", error);
      return "Invalid JSON data"; // Fallback text for invalid JSON
    }
  };

  return (
    <pre>
      <code>
        {formatJson(jsonData)}
      </code>
    </pre>
  );
};

// PropTypes for type checking
Code.propTypes = {
  jsonData: PropTypes.any.isRequired // jsonData can be any type since it will be stringified
};

export default Code;
