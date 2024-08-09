'use client'

import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const JnsPerkara = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    mainCategory: '',
    subCategory: '',
  });

  const handleOptionChange = (level, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [level]: value,
      ...(level === 'mainCategory' && { subCategory: '' }),
    }));
  };

  const handleReset = () => {
    setSelectedOptions({
      mainCategory: '',
      subCategory: '',
    });
  };

  const options = [
    {
      id: 'pengadilan-negeri',
      label: 'Pengadilan Negeri',
      subOptions: [
        {
          id: 'perdata-umum',
          label: 'Perdata Umum',
          dataFields: ['Data A', 'Data B']
        },
        {
          id: 'perdata-khusus',
          label: 'Perdata Khusus',
          dataFields: ['Data A', 'Data B']
        }
      ]
    },
    {
      id: 'pengadilan-tata-usaha-negara',
      label: 'Pengadilan Tata Usaha Negara',
      subOptions: [
        {
          id: 'perdata-umum',
          label: 'Perdata Umum'
        },
        {
          id: 'perdata-khusus',
          label: 'Perdata Khusus'
        }
      ]
    },
    {
      id: 'mahkamah-syariyah',
      label: 'Mahkamah Syariyah',
      subOptions: [
        {
          id: 'perdata-umum',
          label: 'Perdata Umum'
        },
        {
          id: 'perdata-khusus',
          label: 'Perdata Khusus'
        }
      ]
    }
  ];

  return (
    <Form>
      <h3>Jenis Perkara:</h3>
      {options.map((mainOption) => (
        <div key={mainOption.id} className="mb-3">
          <Form.Check
            type="radio"
            id={mainOption.id}
            label={mainOption.label}
            name="mainCategory"
            checked={selectedOptions.mainCategory === mainOption.id}
            onChange={() => handleOptionChange('mainCategory', mainOption.id)}
          />
          {selectedOptions.mainCategory === mainOption.id && (
            <div className="ms-4 mt-2">
              {mainOption.subOptions.map((subOption) => (
                <div key={subOption.id} className="mb-2">
                  <Form.Check
                    type="radio"
                    id={`${mainOption.id}-${subOption.id}`}
                    label={subOption.label}
                    name="subCategory"
                    checked={selectedOptions.subCategory === subOption.id}
                    onChange={() => handleOptionChange('subCategory', subOption.id)}
                  />
                  {selectedOptions.subCategory === subOption.id && subOption.dataFields && (
                    <Card className="mt-2">
                      <Card.Body>
                        {subOption.dataFields.map((field, index) => (
                          <Form.Group key={index} className="mb-2">
                            <Form.Label>{field}</Form.Label>
                            <Form.Control type="text" placeholder={`Enter ${field}`} />
                          </Form.Group>
                        ))}
                      </Card.Body>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <Button variant="secondary" onClick={handleReset} className="mt-3">
        Reset
      </Button>
    </Form>
  );
};

export default JnsPerkara;