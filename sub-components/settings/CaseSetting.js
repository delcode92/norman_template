// import node module libraries
import React, { useState, useEffect } from "react";
import { Col, Row, Form, Card, Button, FloatingLabel, Alert } from 'react-bootstrap';

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
  const [insertStat, setinsertStat] = useState(false);

  const [NIK, setNIK] = useState('');
  const [KTP, setKTP] = useState('');
  const [NamaPenggugat, setNamaPenggugat] = useState('');
  const [HP, setHP] = useState('');
  const [Email, setEmail] = useState('');
  const [Alamat, setAlamat] = useState('');
  const [NoPerkara, setNoPerkara] = useState('');
  const [RegID, setRegID] = useState('');
  const [Judul, setJudul] = useState('');
  const [Jenis, setJenis] = useState('');
  const [IdPenasihat, setPenasihat] = useState('');
  const [IdPendamping, setAstPendamping] = useState('');
  const [Deskripsi, setDeskripsi] = useState('');
  const [NamaTergugat, setNamaTergugat] = useState('');

  const [mandiri, setMandiri] = useState(false);
  const [penghubung, setPenghubung] = useState(false);
  
  const [dataTablePenasihat, setDataTablePenasihat] = useState([{id:'', id_user: '', nama: '', email: '', hp: '', addr: '' }]);
  const [dataTable, setDataTable] = useState([{id:'', id_user: '', nama: '', email: '', hp: '', addr: '' }]);
 
  const handleNIK = (event) => setNIK(event.target.value); 
  const handleKTP = (event) => setKTP(event.target.value); 
  const handleNamaPenggugat = (event) => setNamaPenggugat(event.target.value); 
  const handleHP = (event) => setHP(event.target.value); 
  const handleEmail = (event) => setEmail(event.target.value); 
  const handleAlamat = (event) => setAlamat(event.target.value); 
  const handleNoPerkara = (event) => setNoPerkara(event.target.value); 
  const handleRegID = (event) => setRegID(event.target.value); 
  const handleJudul = (event) => setJudul(event.target.value); 
  const handleJenis = (event) => setJenis(event.target.value); 
  const handlePenasihat = (event) => setPenasihat(event.target.value); 
  const handlePendamping = (event) => setAstPendamping(event.target.value); 
  const handleDeskripsi = (event) => setDeskripsi(event.target.value); 
  const handleNamaTergugat = (event) => setNamaTergugat(event.target.value); 
  



  useEffect(  () => {
    // fetch("https://www.tangkapdata2.my.id/get_assistant")
    //     .then( response => response.json() )
    //     .then(
    //         data => {
    //         setDataTable(data);
    //         }
    //     )
  });

  const handleMandiri = ()=>{
    setPenghubung(false)
  }

  const handlePenghubung = ()=>{
    setPenghubung(true)
  }

  const handleSave = async () => {
    console.log(perkaraOrder);
    /*
    var idClient = '';

    // save data to client table
    const responseClient = await fetch('https://www.tangkapdata2.my.id/save_client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ NIK, NamaPenggugat, HP, Alamat }),
            });
    
    const data = await responseClient.json();
    idClient = data['lastClientID'];

    // save data to perkara table
    const responsePerkara = await fetch('https://www.tangkapdata2.my.id/save_perkara', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idClient, IdPendamping, NoPerkara, Judul, Jenis, Deskripsi, NamaPenggugat, NamaTergugat }),
            }).then(
                setinsertStat(true)
            );
  */


  }

  return (
    <Row className="mb-8">
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
                  <h4 className="mb-1">Client information</h4>
                </div>

                {/* NIK */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nik">NIK</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="nik" id="nik" onChange={handleNIK} required />
                  </Col>
                </Row>
                
                {/* KTP */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="ktp">File KTP</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="file"  id="file_ktp" onChange={handleKTP} required />
                  </Col>
                </Row>

                {/* NAMA PENGGUGAT */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nm_penggugat">Nama Penggugat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="penggugat" id="nm_penggugat" onChange={handleNamaPenggugat} required />
                  </Col>
                </Row>

                {/* HP */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="hp_penggugat">HP</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="hp" id="hp_penggugat" onChange={handleHP} required />
                  </Col>
                </Row>

                {/* EMAIL */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email_penggugat">Email</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="hp" id="hp_penggugat" onChange={handleEmail} required />
                  </Col>
                </Row>

                {/* ALAMAT */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="alamat_penggugat">Alamat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="alamat" id="alamat_penggugat" onChange={handleAlamat} required />
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
                      <Form.Check.Input type="radio" name="stat_tahu" onChange={handleMandiri} />
                      <Form.Check.Label>mandiri</Form.Check.Label>
                    </Form.Check>
                    <Form.Check id="customRadioInline2" className="form-check-inline"  >
                      <Form.Check.Input type="radio" name="stat_tahu" onChange={handlePenghubung}/>
                      <Form.Check.Label>penghubung</Form.Check.Label>
                    </Form.Check>

                    {penghubung && (
                      <Row className="mt-2" id="row_penghubung">
                        <Col xs={6}>
                          <Form.Label className="col-form-label">nama:</Form.Label>
                          <Form.Control type="text" id="nm_penghubung" />
                        </Col>
                        <Col xs={6}>
                          <Form.Label className="col-form-label">no kontak:</Form.Label>
                          <Form.Control type="text" id="kontak_penghubung" />
                        </Col>
                      </Row>
                    )}

                  </Col>
                </Row>

              <div className="mt-8 mb-6">
                <h4 className="mb-1">Perkara Info</h4>
              </div>
              
              {/* START FORM */}
              <Form>

                {/* Reg ID */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="reg_id">Reg ID</Form.Label>
                  <Col md={8} xs={12}>
                      <RegistrasiID/>
                  </Col>
                </Row>
                
                {/* NO PERKARA */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="no_perkara">No Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="no perkara" id="no_perkara" onChange={handleNoPerkara} required />
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
                        placeholder="deskripsi perkara"
                        onChange={handleDeskripsi}
                        style={{ height: '100px' }}
                      />
                    </FloatingLabel>

                    {/* <Form.Control type="text" placeholder="deskripsi perkara" id="deskripsi_perkara" required /> */}
                  </Col>
                </Row>
                {/* END FORM */}

                {/* NAMA TERGUGAT */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nm_tergugat">Nama Tergugat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="tergugat" id="nm_tergugat" onChange={handleNamaTergugat} required />
                  </Col>
                </Row>

                
                <div className="mt-8 mb-6">
                  <h4 className="mb-1">Tim Kuasa Hukum</h4>
                </div>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="penasihat_hukum">Penasihat Hukum</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Select onChange={handlePenasihat}>
                      <option>-- pilih penasihat hukum --</option>

                      {dataTablePenasihat.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>{item.nama}</option>
                            )
                        })}
                    
                    </Form.Select>
                  </Col>
                </Row>
                
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="pendamping">Pendamping</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Select onChange={handlePendamping}>
                      <option>-- pilih asisten --</option>

                      {dataTable.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>{item.nama}</option>
                            )
                        })}
                    
                    </Form.Select>
                  </Col>
                </Row>


                {/* Button Save */}
                <Row className="align-items-center">
                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="button" onClick={handleSave}>
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