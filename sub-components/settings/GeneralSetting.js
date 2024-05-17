// import node module libraries
import React, { useState } from "react";
import { Col, Row, Form, Card, Button, Image, Alert } from 'react-bootstrap';

// import widget as custom components
// import { FormSelect, DropFiles } from 'widgets';
import CasesNumber from "data/dashboard/CaseNumber";

// import hooks
import useMounted from 'hooks/useMounted';

// import AutocompleteDropdown from 'widgets/AutocompleteDropdown';

const GeneralSetting = () => {
  const hasMounted = useMounted();

  const [insertStat, setinsertStat] = useState(false);

  // ASSISTANT BIO
  const [FullName, setFullName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Addr, setAddr] = useState('');

  // ASSITANT LOGIN INFO
  const [Username, setUsername] = useState('');
  const [Pass, setPass] = useState('');
  const [RetypePass, setRetypePass] = useState('');

  const handleFullName = (event) => setNIK(event.target.value); 
  const handleLastName = (event) => setLastName(event.target.value); 
  const handleEmail = (event) => setEmail(event.target.value); 
  const handlePhone = (event) => setPhone(event.target.value); 
  const handleAddr = (event) => setAddr(event.target.value)
  
  const handleUsername = (event) => setUsername(event.target.value)
  const handlePass = (event) => setPass(event.target.value)
  const handleRetypePass = (event) => setRetypePass(event.target.value)

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Asisten Pendamping</h4>
          <p className="mb-0 fs-5 text-muted">profile settings </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          
          <Card.Body>
          {insertStat && <Alert variant="success">DATA SAVED!</Alert>}

            <div className=" mb-6">
              <h4 className="mb-1">General Settings</h4>
            </div>
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Avatar</h5>
              </Col>
              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image src="/images/avatar/avatar-5.jpg" className="rounded-circle avatar avatar-lg" alt="" />
                  </div>
                  <div>
                    <Button variant="outline-white" className="me-2" type="submit">Change </Button>
                    <Button variant="outline-white" type="submit">Remove </Button>
                  </div>
                </div>
              </Col>
            </Row>
            {/* col */}
            
            {/* <Row className="mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Cover photo</h5>
              </Col>
              <Col md={9}>
                <div>
                  {hasMounted && <Form action="#" className="dropzone mb-3 py-10 border-dashed">
                    <DropFiles />
                  </Form>}
                  <Button variant="outline-white" type="submit">Change </Button>
                </div>
              </Col>
            </Row> */}
            
            <div>
              <div className="mb-6">
                <h4 className="mb-1">Basic information</h4>
              </div>
              {hasMounted && 
              <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Full name</Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control type="text" placeholder="First name" id="fullName" onChange={handleFullName} required />
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="text" placeholder="Last name" id="lastName" onChange={handleLastName} required />
                  </Col>
                </Row>

                {/* row */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Email</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="email" placeholder="Email" id="email" onChange={handleEmail} required />
                  </Col>
                </Row>
                
                {/* row */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">Phone</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Phone" id="phone" onChange={handlePhone} />
                  </Col>
                </Row>

                {/* Location */}
                {/* <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="country">Location</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect} placeholder="Select Country" id="country" options={countryOptions} />
                  </Col>
                </Row> */}

                {/* Address Line One */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">Address</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Address" id="addressLine" onChange={handleAddr} required />
                  </Col>
                </Row>

                <div className="mt-8 mb-6">
                  <h4 className="mb-1">Login Information</h4>
                </div>

                {/* USERNAME */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="uname">User Name</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="username" id="uname" onChange={handleUsername} required />
                  </Col>
                </Row>

                {/* PASS */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="pass">Password</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="password" placeholder="password" id="pass" onChange={handlePass} required />
                  </Col>
                </Row>
                
                {/* RETYPE PASS */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="repass">Retype Password</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="password" placeholder="retype password" id="repass" onChange={handleRetypePass} required />
                  </Col>
                </Row>

                {/* <div className="mt-8 mb-6">
                  <h4 className="mb-1">Case Assignment</h4>
                </div>

                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="case_number">Case Number</Form.Label>
                  <Col md={8} xs={12}>
                    <AutocompleteDropdown items={CasesNumber} />
                  </Col>
                </Row> */}

                {/* Address Line Two */}
                {/* <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLineTwo">Address line 2</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Address line 2" id="addressLineTwo" required />
                  </Col>
                </Row> */}


                {/* Zip code */}
                <Row className="align-items-center">
                  {/* <Form.Label className="col-sm-4" htmlFor="zipcode">Zip code</Form.Label> */}

                  {/* <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Zip code" id="zipcode" required />
                  </Col> */}

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>

                </Row>
              </Form>
              }
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default GeneralSetting