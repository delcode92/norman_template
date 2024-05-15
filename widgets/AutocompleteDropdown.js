// AutocompleteDropdown.js
import React, { useState } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';

const AutocompleteDropdown = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredItems(items.filter(item => 
      item.toLowerCase().includes(value.toLowerCase())
    ));
    setShow(true);
  };

  const handleSelect = (item) => {
    setInputValue(item);
    setShow(false);
  };

  return (
    // <Dropdown>
    //     <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    //         Dropdown Button
    //     </Dropdown.Toggle>
    //     <Dropdown.Menu>
    //         <Dropdown.Item href="#">Action</Dropdown.Item>
    //         <Dropdown.Item href="#">Another action</Dropdown.Item>
    //         <Dropdown.Item href="#">Something else</Dropdown.Item>
    //     </Dropdown.Menu>
    // </Dropdown>

    <Dropdown show={show}>
      <Dropdown.Toggle id="dropdown-basic" as="div">
        <FormControl 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShow(true)}
          onBlur={() => setTimeout(() => setShow(false), 100)}
          placeholder="Search..."
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {filteredItems.map((item, index) => (
          <Dropdown.Item 
            key={index} 
            onMouseDown={() => handleSelect(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AutocompleteDropdown;
