import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const JnsPerkara = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    court: '',
    category: '',
    subCategory: '',
    case: '',
    subCase: ''
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOptionChange = (level, value) => {
    setSelectedOptions(prevState => {
      const newState = { ...prevState, [level]: value };
      const levels = ['court', 'category', 'subCategory', 'case', 'subCase'];
      const index = levels.indexOf(level);
      for (let i = index + 1; i < levels.length; i++) {
        newState[levels[i]] = '';
      }
      return newState;
    });
  };

  const handleReset = () => {
    setSelectedOptions({
      court: '',
      category: '',
      subCategory: '',
      case: '',
      subCase: ''
    });
  };

  const options = [
    {
      id: 'pengadilan-negeri',
      label: 'Pengadilan Negeri',
      categories: [
        {
          id: 'perdata-umum',
          label: 'Perdata Umum',
          subCategories: [
            {
              id: 'perdata-gugatan',
              label: 'Perdata Gugatan',
              cases: [
                { id: 'perbuatan-melawan-hukum', label: 'Perbuatan Melawan Hukum' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            },
            {
              id: 'perdata-gugatan-sederhana',
              label: 'Perdata Gugatan Sederhana',
              cases: [
                { id: 'perbuatan-melawan-hukum', label: 'Perbuatan Melawan Hukum' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            },
            {
              id: 'perdata-permohonan',
              label: 'Perdata Permohonan',
              cases: [
                { id: 'pengampunan', label: 'Pengampunan' },
                { id: 'perbaikan-kesalahan-akta-kelahiran', label: 'Perbaikan Kesalahan dalam Akta Kelahiran' }
              ]
            }
          ]
        },
        {
          id: 'perdata-khusus',
          label: 'Perdata Khusus',
          subCategories: [
            { id: 'hki', label: 'HKI' },
            { id: 'kepailitan-pkpu', label: 'Kepailitan & PKPU' },
            {
              id: 'pengadilan-hubungan-industrial',
              label: 'Pengadilan Hubungan Industrial',
              cases: [
                { id: 'phk-massal', label: 'Perselisihan Pemutusan Hubungan Kerja Massal' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'pengadilan-tata-usaha-negara',
      label: 'Pengadilan Tata Usaha Negara',
      categories: [
        { id: 'perdata-umum', label: 'Perdata Umum' },
        { id: 'perdata-khusus', label: 'Perdata Khusus' }
      ]
    },
    {
      id: 'mahkamah-syariyah',
      label: 'Mahkamah Syariyah',
      categories: [
        { id: 'perdata-umum', label: 'Perdata Umum' },
        { id: 'perdata-khusus', label: 'Perdata Khusus' }
      ]
    }
  ];

  const renderRadioOption = (level, option, selected, onChange) => (
    <div key={option.id} className="mb-2">
      <label className="mb-0">
        <input
          type="radio"
          name={level}
          value={option.id}
          checked={selected === option.id}
          onChange={() => onChange(level, option.id)}
          className="me-2"
        />
        {option.label}
      </label>
    </div>
  );

  if (!isClient) {
    return null; // or return a loading placeholder
  }

  return (
    <div>
      {options.map((court) => (
        <div key={court.id} className="mb-3">
          {renderRadioOption('court', court, selectedOptions.court, handleOptionChange)}
          
          {selectedOptions.court === court.id && court.categories && (
            <div className="ms-4">
              {court.categories.map((category) => (
                <div key={category.id}>
                  {renderRadioOption('category', category, selectedOptions.category, handleOptionChange)}
                  
                  {selectedOptions.category === category.id && category.subCategories && (
                    <div className="ms-4">
                      {category.subCategories.map((subCategory) => (
                        <div key={subCategory.id}>
                          {renderRadioOption('subCategory', subCategory, selectedOptions.subCategory, handleOptionChange)}
                          
                          {selectedOptions.subCategory === subCategory.id && subCategory.cases && (
                            <div className="ms-4">
                              {subCategory.cases.map((caseOption) => (
                                <div key={caseOption.id}>
                                  {renderRadioOption('case', caseOption, selectedOptions.case, handleOptionChange)}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
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