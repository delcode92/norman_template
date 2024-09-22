// import node module libraries
import React, { useState, useEffect } from "react";
import { Col, Row, Form, Card, Button, FloatingLabel, Alert, Modal } from 'react-bootstrap';

// import JnsPerkara from '../../app/(dashboard)/components/jns_perkara/page';


// import widget as custom components
// import { FormSelect, DropFiles } from 'widgets';

// import hooks
// import useMounted from 'hooks/useMounted';

// import CasesNumber from "data/dashboard/CaseNumber";
import JnsPerkara from 'sub-components/jns_perkara/jns_perkara';
import RegistrasiID from 'sub-components/reg_id/reg_id';
// import CurrentPlan from 'sub-components/billing/CurrentPlan';


const CaseSetting = () => {

  const [perkaraOrder, setPerkaraOrder] = useState('');
  const [modalStat, setmodalStat] = useState(false);
  const [insertStat, setinsertStat] = useState(false);
  const [savingState, setSavingState] = useState('');

  const [NIK, setNIK] = useState('');
  const [KTP, setKTP] = useState('');
  const [NamaPenggugat, setNamaPenggugat] = useState('');
  const [HP, setHP] = useState('');
  const [Email, setEmail] = useState('');
  const [Alamat, setAlamat] = useState('');
  const [ViaMandiri, setViaMandiri] = useState('false');
  const [NamaPenghubung, setNamaPenghubung] = useState('');
  const [KontakPenghubung, setKontakPenghubung] = useState('');

  const [NoPerkara, setNoPerkara] = useState('');
  const [NoLpPol, setNoLpPol] = useState('');
  const [NoLainnya, setNoLainnya] = useState('');
  const [RegID, setRegID] = useState('');
  const [Judul, setJudul] = useState('');
  // const [Jenis, setJenis] = useState('');
  const [Deskripsi, setDeskripsi] = useState('');

  const [Tergugat1, setTergugat1] = useState('');
  const [Tergugat2, setTergugat2] = useState('');
  const [Tergugat3, setTergugat3] = useState('');
  const [Tergugat4, setTergugat4] = useState('');
  const [Tergugat5, setTergugat5] = useState('');

  // const [IdPenasihat, setPenasihat] = useState([]);
  // const [IdPendamping, setAstPendamping] = useState([]);

  let IdPenasihat = [];
  let IdPendamping = [];
  let ParaPihakTergugat = [];

  const [mandiri, setMandiri] = useState(false);
  const [penghubung, setPenghubung] = useState(false);
  
  const [dataTablePenasihat, setDataTablePenasihat] = useState(
    [ {id:'1',  nama: '', email: '', hp: '', addr: '' } ]
  );
  const [pilihPenasihat, setPilihPenasihat] = useState([]);
  
  const [dataTablePendamping, setDataTablePendamping] = useState([{id:'', id_user: '', nama: '', email: '', hp: '', addr: '' }]);
  const [pilihPendamping, setPilihPendamping] = useState([]);
 


  const handleNIK = (event) => setNIK(event.target.value); 
  const handleKTP = (event) => setKTP(event.target.value); 
  const handleNamaPenggugat = (event) => setNamaPenggugat(event.target.value); 
  const handleHP = (event) => setHP(event.target.value); 
  const handleEmail = (event) => setEmail(event.target.value); 
  const handleAlamat = (event) => setAlamat(event.target.value); 
  const handleNoPerkara = (event) => setNoPerkara(event.target.value); 
  const handleNoLpPol = (event) => setNoLpPol(event.target.value);
  const handleNoLainnya = (event) => setNoLainnya(event.target.value);

  const handleRegID = (event) => setRegID(event.target.value); 
  const handleJudul = (event) => setJudul(event.target.value); 
  // const handleJenis = (event) => setJenis(event.target.value); 

  const handlePenasihat = (event) => {
    const selectedOption = event.target.selectedOptions[0];
    const id = selectedOption.value;
    const name = selectedOption.dataset.name;
    // setPenasihat(event.target.value);

    // add penasihat id to array
    IdPenasihat.push(id);

    setPilihPenasihat(prevArray => {
      // Check if the name is already in the array to avoid duplicates
      if (!prevArray.includes(name)) {
        return [...prevArray, name];
      }
      return prevArray;
    });

  };
  
  const handlePendamping = (event) => {
    const selectedOption = event.target.selectedOptions[0];
    const id = selectedOption.value;
    const name = selectedOption.dataset.name;

    // add penasihat id to array
    IdPendamping.push(id);

    setPilihPendamping(prevArray => {
      // Check if the name is already in the array to avoid duplicates
      if (!prevArray.includes(name)) {
        return [...prevArray, name];
      }
      return prevArray;
    });

  };
  
  const handleDeskripsi = (event) => setDeskripsi( event.target.value); 
  const handleTergugat1 = (event) => setTergugat1( ParaPihakTergugat.push(event.target.value) ); 
  const handleTergugat2 = (event) => setTergugat2( ParaPihakTergugat.push(event.target.value) ); 
  const handleTergugat3 = (event) => setTergugat3( ParaPihakTergugat.push(event.target.value) ); 
  const handleTergugat4 = (event) => setTergugat4( ParaPihakTergugat.push(event.target.value) ); 
  const handleTergugat5 = (event) => setTergugat5( ParaPihakTergugat.push(event.target.value) ); 

  useEffect(  () => {
    // fetch penasihat
    fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/get_penasihat")
        .then( response => response.json() )
        .then(
            data => {
              setDataTablePenasihat(data);
            }
        );
    
    // fetch pendamping
    fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/get_pendamping")
        .then( response => response.json() )
        .then(
            data => {
              setDataTablePendamping(data);
            }
        );

  },[]);

  const handleMandiri = (e)=>{
    console.log("handleMandiri:", e.target.value);
    setPenghubung(false)
    setViaMandiri(e.target.value)
  }
  
  const handlePenghubung = (e)=>{
    console.log("handlePenghubung:", e.target.value);
    setPenghubung(true)
    setViaMandiri('false')
  }

  const handleNamaPenghubung = (e) => {
    setNamaPenghubung(e.target.value);
  }

  const handleKontakPenghubung = (e) => {
    setKontakPenghubung(e.target.value);
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    // 1. save client information
    console.log("info client:");
    console.log(NIK, NamaPenggugat, HP, Email, Alamat, ViaMandiri, NamaPenghubung, KontakPenghubung, "\n");
    
    // 2. save perkara info
    console.log("info perkara:");
    console.log(NoPerkara, NoLpPol, NoLainnya, Judul, perkaraOrder, Deskripsi, Tergugat1, Tergugat2, Tergugat3, Tergugat4, Tergugat5, "\n");
    
    // 3. save tim kuasa hukum 
    console.log("tim penasihat:");
    console.log(pilihPenasihat, pilihPendamping, "\n");


    var idClient = '';
    let client_data = {};
    let file_url = '';

    // ======== upload file to cloudinary ============

    // Get the file input element
    const fileInput = document.getElementById('file_ktp');
    const file = fileInput.files ? fileInput.files[0] : null;
    const formData = new FormData();

    if (file) {
      // File exists, append it to FormData
      formData.append('file', file);
      
      // SEND TO CLOUDINARY
      setmodalStat(true);
      setSavingState('Uploading KTP File ... ');
      const res = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/upload_ktp", {
        method: 'POST',
        body: formData,
      });

      console.log("====here=====");
      const { fileUrl } = await res.json();
      console.log(fileUrl);
      
      setmodalStat(false);

      file_url = fileUrl
    }
    
    // save data to client table
    let table_name = "client"
    client_data = {NIK, NamaPenggugat, HP, Email, Alamat, ViaMandiri, NamaPenghubung, KontakPenghubung, file_url, table_name}

    const responseClient = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST+'/save_client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( client_data ),
    });
    
    const data = await responseClient.json();
    console.log("====> returning id: ", data[0]['id']);
    idClient = data[0]['id'];
  
    // save data to perkara table
    table_name = "perkara"
    const responsePerkara = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST+'/save_perkara', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idClient, IdPenasihat, IdPendamping, NoPerkara, NoLpPol, NoLainnya, perkaraOrder, Judul, Deskripsi, ParaPihakTergugat, table_name}),
    }).then(
        setinsertStat(true)
    );

  }

  return (
    
    
    <Row className="mb-8">

      {/* MODAL PROCESS */}
      {
        modalStat &&
        <div
          className="modal show"
          style={{ display: 'block', position: 'fixed', top:'40%' }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Saving Progress</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h4>{savingState}</h4>
            </Modal.Body>

          </Modal.Dialog>
        </div>
      }

      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Data Perkara</h4>
          <p className="mb-0 fs-5 text-muted">tambah perkara baru</p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
          
          {insertStat && <Alert variant="success">DATA SAVED!</Alert>}
            
            <div>

              <div className="mb-6">
                  <h4 className="mb-1">Klien Info:</h4>
                </div>

                {/* NIK */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nik">NIK</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="nik" onChange={handleNIK} required />
                  </Col>
                </Row>
                
                {/* KTP */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="ktp">File KTP</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="file"  id="file_ktp" onChange={handleKTP} />
                  </Col>
                </Row>

                {/* NAMA PENGGUGAT */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nm_penggugat">Nama Penggugat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="nm_penggugat" onChange={handleNamaPenggugat} required />
                  </Col>
                </Row>

                {/* HP */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="hp_penggugat">HP</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="hp_penggugat" onChange={handleHP} required />
                  </Col>
                </Row>

                {/* EMAIL */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email_penggugat">Email</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="user@email.com" id="hp_penggugat" onChange={handleEmail} />
                  </Col>
                </Row>

                {/* ALAMAT */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="alamat_penggugat">Alamat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="alamat_penggugat" onChange={handleAlamat} required />
                  </Col>
                </Row>
                
                {/* darimana anda mengetahui */}
                
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label">Darimana anda tahu perusahaan ini ?</Form.Label>
                </Row>

                {/* I want to create 
                nama -> nm_penghubung inline 
                no kontak -> kontak_penghubung inline 
                
                but now it  display on row style not inline side by side
                */}
                <Row className="mb-3">
                  <Col md={8} xs={12}>

                    <Form.Check id="customRadioInline1" className="form-check-inline" >
                      <Form.Check.Input type="radio" name="stat_tahu" value="true" onChange={handleMandiri} />
                      <Form.Check.Label>mandiri</Form.Check.Label>
                    </Form.Check>
                    <Form.Check id="customRadioInline2" className="form-check-inline"  >
                      <Form.Check.Input type="radio" name="stat_tahu" value="true" onChange={handlePenghubung}/>
                      <Form.Check.Label>penghubung</Form.Check.Label>
                    </Form.Check>

                    {penghubung && (
                      <Row className="mt-2" id="row_penghubung">
                        <Col xs={6}>
                          <Form.Label className="col-form-label">nama:</Form.Label>
                          <Form.Control type="text" id="nm_penghubung" onChange={handleNamaPenghubung} />
                        </Col>
                        <Col xs={6}>
                          <Form.Label className="col-form-label">no kontak:</Form.Label>
                          <Form.Control type="text" id="kontak_penghubung" onChange={handleKontakPenghubung}/>
                        </Col>
                      </Row>
                    )}

                  </Col>
                </Row>

              <div className="mt-8 mb-6">
                <h4 className="mb-1">Perkara Info:</h4>
              </div>
              
              {/* START FORM */}
              <Form onSubmit={handleSubmit}>

                {/* Reg ID */}
                
                {/*}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="reg_id">Reg ID</Form.Label>
                  <Col md={8} xs={12}>
                      <RegistrasiID/>
                  </Col>
                </Row>
                */}
                
                {/* NO PERKARA */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="no_perkara">No Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="no_perkara" onChange={handleNoPerkara} />
                  </Col>
                </Row>
                
                {/* NO LP POLISI */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="no_lp_pol">No Lap.Polisi</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="no_lp_pol" onChange={handleNoLpPol} />
                  </Col>
                </Row>
                
                {/* NO/KODE LAINNYA */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="no_lainnya">No/Kode Lainnya</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="..." id="no_lainnya" onChange={handleNoLainnya} />
                  </Col>
                </Row>
                
                {/* JUDUL */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="judul_perkara">Judul Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="judul" id="judul_perkara" onChange={handleJudul} required />
                  </Col>
                </Row>
                
                {/* JENIS PERKARA */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="jenis_perkara">Jenis Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    
                    {/* how to create onselect on this component below ? */}
                    {/* <Form.Select onChange={handleJenis}>
                      <option>-- jenis perkara --</option>
                      <option value="perdata">Perdata</option>
                      <option value="pidana">Pidana</option>
                    </Form.Select> */}
                    {/* <CurrentPlan/> */}
                    
                    <JnsPerkara perkaraOrder={perkaraOrder} setPerkaraOrder={setPerkaraOrder}/>

                  </Col>
                </Row>

                {/* DESKRIPSI */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="deskripsi_perkara">Deskripsi Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    
                    <FloatingLabel controlId="deskripsi_perkara" label="deskripsi">
                      <Form.Control
                        as="textarea"
                        placeholder="...."
                        onChange={handleDeskripsi}
                        style={{ height: '100px' }}
                        required
                      />
                    </FloatingLabel>

                    {/* <Form.Control type="text" placeholder="deskripsi perkara" id="deskripsi_perkara" required /> */}
                  </Col>
                </Row>
                {/* END FORM */}

                {/* NAMA TERGUGAT */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nm_tergugat">Para Pihak(Tergugat)</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control className="mb-3" type="text" placeholder="1 ..." id="tergugat1" onChange={handleTergugat1} required />
                    <Form.Control className="mb-3" type="text" placeholder="2 ..." id="tergugat2" onChange={handleTergugat2} />
                    <Form.Control className="mb-3" type="text" placeholder="3 ..." id="tergugat3" onChange={handleTergugat3} />
                    <Form.Control className="mb-3" type="text" placeholder="4 ..." id="tergugat4" onChange={handleTergugat4} />
                    <Form.Control className="mb-3" type="text" placeholder="5 ..." id="tergugat5" onChange={handleTergugat5} />
                  </Col>
                </Row>
                
                <div className="mt-8 mb-6">
                  <h4 className="mb-1">Tim Kuasa Hukum:</h4>
                </div>

                {/* pilih penasehat hukum */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="penasihat_hukum">Penasihat Hukum</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Select onChange={handlePenasihat}>
                      <option>-- pilih penasihat hukum --</option>

                      {dataTablePenasihat.map((item, index) => {
                            return (
                              <option key={index} value={item.id} data-name={item.nama} >{item.nama}</option>
                            )
                        })}
                    
                    </Form.Select>
                  </Col>
                </Row>
                
                <Row className="mb-3">
                  <Col sm={4}/>
                  <Col md={8} xs={12}>
                    <ul>
                        {pilihPenasihat.map((item, index) => {
                            return (
                              <li key={index}>{item}</li>        
                            )
                        })}
                    </ul>
                    </Col>
                </Row>
                {/* END */}

                {/* pilih asisten pendamping */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="pendamping">Pendamping</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Select onChange={handlePendamping}>
                      <option>-- pilih asisten --</option>

                      {dataTablePendamping.map((item, index) => {
                            return (
                              <option key={index} value={item.id} data-name={item.nama}>{item.nama}</option>
                            )
                        })}
                    
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col sm={4}/>
                  <Col md={8} xs={12}>
                    <ul>
                        {pilihPendamping.map((item, index) => {
                            return (
                              <li key={index}>{item}</li>        
                            )
                        })}
                    </ul>
                    </Col>
                </Row>
                {/* END */}

                {/* Button Save */}
                <Row className="align-items-center">
                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>
                </Row>
       
              </Form>
            
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default CaseSetting