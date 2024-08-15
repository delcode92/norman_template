import React, { useState, useMemo } from 'react';
import {Form, ListGroup}  from 'react-bootstrap';

const RegistrasiID = ({ data, searchByValue = true }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const data_reg_id = {
    "R123": "perkara 1", "R112": "perkara 2", "R122": "perkara 3", 
    "R110": "perkara 4", "R445": "perkara 5",
  };

  const items = useMemo(() => {
    const dataToUse = data || data_reg_id;
    return Object.entries(dataToUse).map(([key, value]) => ({
      key,
      value,
      searchTerm: searchByValue ? value : key,
      displayTerm: searchByValue ? key : value
    }));
  }, [data, searchByValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = items.filter(
        item => item.searchTerm.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.searchTerm);
    setSuggestions([]);
  };

  return (
    <div className="position-relative">
      <Form.Control
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={searchByValue ? "Type a perkara..." : "Type a registration ID..."}
      />
      {suggestions.length > 0 && (
        <ListGroup className="position-absolute w-100 mt-1">
          {suggestions.map((suggestion, index) => (
            <ListGroup.Item 
              key={index}
              action
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <span className="fw-bold">{suggestion.displayTerm}</span>: {suggestion.searchTerm}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default RegistrasiID;