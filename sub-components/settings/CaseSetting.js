// import node module libraries
import { Col, Row, Form, Card, Button, FloatingLabel, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect, DropFiles } from 'widgets';

// import hooks
// import useMounted from 'hooks/useMounted';

const CaseSetting = () => {
  // const hasMounted = useMounted();
  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'US', label: 'US' },
    { value: 'UK', label: 'UK' },
    { value: 'UAE', label: 'UAE' }
  ];

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
            
            <div>

              <div className="mb-6">
                  <h4 className="mb-1">Client information</h4>
                </div>

                {/* NAMA PENGGUGAT */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="nm_penggugat">Nama Penggugat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="penggugat" id="nm_penggugat" required />
                  </Col>
                </Row>

                {/* HP */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="hp_penggugat">HP</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="hp" id="hp_penggugat" required />
                  </Col>
                </Row>

                {/* ALAMAT */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="alamat_penggugat">Alamat</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="alamat" id="alamat_penggugat" required />
                  </Col>
                </Row>


              <div className="mt-8 mb-6">
                <h4 className="mb-1">Basic information</h4>
              </div>
              
              {/* START FORM */}
              <Form>

                {/* NO PERKARA */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="no_perkara">No Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="no perkara" id="no_perkara" required />
                  </Col>
                </Row>
                
                {/* JUDUL */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="judul_perkara">Judul Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="judul" id="judul_perkara" required />
                  </Col>
                </Row>
                
                {/* JENIS PERKARA */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="jenis_perkara">Jenis Perkara</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Select>
                      <option>-- jenis perkara --</option>
                      <option value="perdata">Perdata</option>
                      <option value="pidana">Pidana</option>
                    </Form.Select>
                  </Col>
                </Row>

                {/* DESKRIPSI */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="deskripsi_perkara">Deskripsi</Form.Label>
                  <Col md={8} xs={12}>
                    
                    <FloatingLabel controlId="deskripsi_perkara" label="Comments">
                      <Form.Control
                        as="textarea"
                        placeholder="deskripsi perkara"
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
                    <Form.Control type="text" placeholder="tergugat" id="nm_tergugat" required />
                  </Col>
                </Row>

                
                


                {/* Zip code */}
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