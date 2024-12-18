import React, { useState, useEffect } from 'react';
// import { Form, Card, Button } from 'react-bootstrap';

const JnsPerkara = ({perkaraOrder, setPerkaraOrder}) => {

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
    
    let po = perkaraOrder + "->" + value;
    setPerkaraOrder(po);
    console.log(perkaraOrder);

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
                { id: 'ganti-rugi', label: 'Ganti Rugi' },
                { id: 'wanprestasi', label: 'Wanprestasi' },
                { id: 'perceraian', label: 'Perceraian' },
                { id: 'harta-bersama', label: 'Harta Bersama' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            },
            {
              id: 'perdata-gugatan-sederhana',
              label: 'Perdata Gugatan Sederhana',
              cases: [
                { id: 'perbuatan-melawan-hukum', label: 'Perbuatan Melawan Hukum' },
                { id: 'wanprestasi', label: 'Wanprestasi' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            },
            {
              id: 'perdata-permohonan',
              label: 'Perdata Permohonan',
              cases: [
                { id: 'pengampunan', label: 'Pengampunan' },
                { id: 'perbaikan-kesalahan-akta-kelahiran', label: 'Perbaikan Kesalahan dalam Akta Kelahiran' },
                { id: 'pengangkatan-wali-anak', label: 'Pengangkatan Wali Bagi Anak' },
                { id: 'akta-kematian', label: 'Akta Kematian' },
                { id: 'permohonan-ganti-nama', label: 'Permohonan Ganti Nama' },
                { id: 'wali-dan-izin-jual', label: 'Wali dan Izin Jual' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            }
          ]
        },
        {
          id: 'perdata-khusus',
          label: 'Perdata Khusus',
          subCategories: [
            { id: 'hki', label: 'HKI' },
            { id: 'partai-politik', label: 'Partai Politik' },
            { id: 'kepailitan-pkpu', label: 'Kepailitan & PKPU' },
            {
              id: 'pengadilan-hubungan-industrial',
              label: 'Pengadilan Hubungan Industrial',
              cases: [
                { id: 'phk-massal', label: 'Perselisihan Pemutusan Hubungan Kerja Massal' },
                { id: 'phk-sepihak', label: 'Perselisihan Pemutusan Hubungan Kerja Sepihak' },
                { id: 'hak-pekerja-tidak-dipenuhi', label: 'Perselisihan Hak Pekerja Yang Sudah Diperjanjikan Tidak Dipenuhi' },
                { id: 'phk-tanpa-hak-pekerja', label: 'Pemutusan Hubungan Kerja Tanpa Memperhatikan Hak Pekerja' },
                { id: 'phk-tindak-pidana', label: 'Perselisihan Pemutusan Hubungan Kerja Karena Pekerja Melakukan Tindak Pidana' },
                { id: 'phk-indisipliner', label: 'Perselisihan Hubungan Kerja Karena Pekerja Indisipliner' },
                { id: 'upah-tidak-dibayar', label: 'Perselisihan Hak Pekerja Karena Upah Tidak Dibayar' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            },
            { id: 'kppu', label: 'KPPU' }
          ]
        },
        {
          id: 'pidana',
          label: 'Pidana',
          cases: [
            { id: 'pencurian', label: 'Pencurian' },
            { id: 'imigrasi', label: 'Imigrasi' },
            { id: 'penggelapan', label: 'Penggelapan' },
            { id: 'perlindungan-anak', label: 'Perlindungan Anak' },
            { id: 'kejahatan-terhadap-nyawa', label: 'Kejahatan Terhadap Nyawa' },
            { id: 'penipuan', label: 'Penipuan' },
            { id: 'kesehatan', label: 'Kesehatan' },
            { id: 'pengeroyokan', label: 'Pengeroyokan' },
            { id: 'penganiayaan', label: 'Penganiayaan' },
            { id: 'pidana-pra-peradilan', label: 'Pidana Pra Peradilan' },
            { id: 'sah-tidaknya-penghentian-penyidikan', label: 'Sah atau tidaknya penghentian penyidikan' },
            { id: 'sah-tidaknya-penetapan-tersangka', label: 'Sah atau tidaknya penetapan tersangka' },
            { id: 'sah-tidaknya-penangkapan', label: 'Sah atau tidaknya penangkapan' },
            { id: 'sah-tidaknya-penahanan', label: 'Sah atau tidaknya penahanan' },
            { id: 'perkara-lalu-lintas', label: 'Perkara Lalu Lintas' },
            { id: 'lain-lain', label: 'Lain-lain' }
          ]
        }
      ]
    },
    {
      id: 'pengadilan-tata-usaha-negara',
      label: 'Pengadilan Tata Usaha Negara',
      categories: [
        {
          id: 'perkara',
          label: 'Perkara',
          subCategories: [
            {
              id: 'perdata-gugatan',
              label: 'Perdata Gugatan',
              cases: [
                { id: 'tender', label: 'Tender' },
                { id: 'pertanahan', label: 'Pertanahan' },
                { id: 'kepala-desa-perangkat-desa', label: 'Kepala Desa dan Perangkat Desa' },
                { id: 'kepegawaian', label: 'Kepegawaian' },
                { id: 'perizinan', label: 'Perizinan' },
                { id: 'tindakan-administrasi-pemerintah', label: 'Tindakan Administrasi Pemerintah/Tindakan Faktual' },
                { id: 'partai-politik', label: 'Partai Politik' },
                { id: 'lain-lain', label: 'Lain-lain' }
              ]
            },
            {
              id: 'permohonan-uu-ap',
              label: 'Permohonan UU AP',
              cases: [
                { id: 'permohonan-fiktif-positif', label: 'Permohonan Fiktif Positif' },
                { id: 'lain-lain', label: 'Lain-Lain' }
              ]
            },
            {
              id: 'gugatan-keberatan-kip',
              label: 'Gugatan Keberatan (KIP)',
              cases: [
                { id: 'keterbukaan-informasi-publik', label: 'Keterbukaan Informasi Publik (KIP)' },
                { id: 'lain-lain', label: 'Lain-Lain' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'mahkamah-syariyah',
      label: 'Mahkamah Syariyah',
      categories: [
        {
          id: 'jinayat',
          label: 'Jinayat',
          subCategories: [
            {
              id: 'praperadilan-jinayat',
              label: 'Praperadilan Jinayat',
              cases: [
                { id: 'sah-tidaknya-penangkapan', label: 'Sah atau tidaknya penangkapan' },
                { id: 'lain-lain', label: 'Lain-Lain' }
              ]
            },
            {
              id: 'registrasi-perkara-jinayat',
              label: 'Registrasi Perkara Jinayat',
              cases: [
                { id: 'maisir', label: 'Maisir' },
                { id: 'khamar', label: 'Khamar' },
                { id: 'pelecehan-seksual', label: 'Pelecehan Seksual' },
                { id: 'pemerkosaan', label: 'Pemerkosaan' },
                { id: 'ikhtilath', label: 'Ikhtilath' },
                { id: 'khalwat', label: 'Khalwat' },
                { id: 'zina', label: 'Zina' },
                { id: 'lain-lain', label: 'Lain-Lain' }
              ]
            }
          ]
        },
        {
          id: 'jinayat-anak',
          label: 'Jinayat Anak',
          subCategories: [
            {
              id: 'register-perkara-jinayat-anak',
              label: 'Register Perkara Jinayat Anak',
              cases: [
                { id: 'pemerkosaan', label: 'Pemerkosaan' },
                { id: 'lain-lain', label: 'Lain-Lain' }
              ]
            }
          ]
        }
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
          required
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
                  
                  {selectedOptions.category === category.id && category.cases && (
                    <div className="ms-4">
                      {category.cases.map((caseOption) => (
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
      {/* <Button variant="secondary" onClick={handleReset} className="mt-3">
        Reset
      </Button> */}
    </div>
  );
};

export default JnsPerkara;