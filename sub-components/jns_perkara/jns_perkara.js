import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const JnsPerkara = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    mainCategory: '',
    subCategory: '',
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) {
    return null; // or return a loading placeholder
  }

  return (
    <div>
      <h3>Jenis Perkara:</h3>
      {options.map((mainOption) => (
        <div key={mainOption.id} className="mb-3">
          <div className="mb-2">
            <label className="mb-0">
              <input
                type="radio"
                name="mainCategory"
                value={mainOption.id}
                checked={selectedOptions.mainCategory === mainOption.id}
                onChange={() => handleOptionChange('mainCategory', mainOption.id)}
                className="me-2"
              />
              {mainOption.label}
            </label>
          </div>
          {selectedOptions.mainCategory === mainOption.id && (
            <div className="ms-4">
              {mainOption.subOptions.map((subOption) => (
                <div key={subOption.id} className="mb-2">
                  <label className="mb-0">
                    <input
                      type="radio"
                      name="subCategory"
                      value={subOption.id}
                      checked={selectedOptions.subCategory === subOption.id}
                      onChange={() => handleOptionChange('subCategory', subOption.id)}
                      className="me-2"
                    />
                    {subOption.label}
                  </label>
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
    </div>
  );
};

export default JnsPerkara;