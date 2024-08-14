import React, { useState, useMemo } from 'react';

const AutocompleteInput = ({ data, searchByValue = true }) => {
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
    <div className="relative w-64">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={searchByValue ? "Type a perkara..." : "Type a registration ID..."}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              <span className="font-semibold">{suggestion.displayTerm}</span>: {suggestion.searchTerm}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;