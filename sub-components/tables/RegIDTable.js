// import node module libraries
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import {  Col, Row, Card, Table, Dropdown, Pagination, Form, Button } from 'react-bootstrap';
import { MoreVertical, Filter } from 'react-feather';

var row_number = 0;

const RegIDTable = () => {
  
  const [dataTable, setDataTable] = useState([]);
  const [inputRegID, setInputRegID] = useState('');
  const [inputJnsPerkara, setInputJnsPerkara] = useState('');

//   const [rows, setRows] = useState(
//     Object.entries(dataTable).map(([key, value]) => ({
//         regID: key,
//         jnsPerkara: value
//     }))
//   );

    // const hasMounted = useMounted();
    useEffect(  () => {
        // fetch data from table jns_perkara here
        fetch( process.env.NEXT_PUBLIC_SERVER_HOST + "/get_jns_perkara")
            .then( response => response.json() )
            .then(
                data => {

                    // console.log("from DB====>");
                    // console.log(data[0]['list_jns_perkara']);
                    setDataTable(data);

                    // setRows(Object.entries(data[0]['list_jns_perkara']).map(([key, value]) => ({
                    //     regID: key,
                    //     jnsPerkara: value
                    // })));
                }
            )

    }, []);

  

  
  // Handle change for a specific row
  const handleInputChange = async (index, field, value) => {
    // const updatedRows = [...rows];
    // let old_key = "";
    // let new_key = ""

    // if(field=="regID"){
    //     old_key = updatedRows[index][field];
    //     new_key = value;
    // }
    // updatedRows[index][field] = value;
    
    // console.log("ulr: " + process.env.NEXT_PUBLIC_SERVER_HOST);

    const response = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST + '/update_regid', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ index, field, value }),
    }).then(
        // setRows(updatedRows)
    );

    // console.log("\n===============")
    // console.log(response);
    // console.log("===============\n")


};

//   const handleInputRegID = (e) => {
//     setInputRegID(e.target.value);
//   };
  
//   const handleInputJnsPerkara = (e) => {
//     setInputJnsPerkara(e.target.value);
//   };

 

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    (<Link
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
            console.log("ref value: ",  ref);
        }}
        className="text-muted text-primary-hover">
        {children}
    </Link>)
  ));
  
  CustomToggle.displayName = 'CustomToggle';
  
  const ActionFilter = () => {
  
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
                <Filter size="15px" className="text-muted" />
            </Dropdown.Toggle>
  
            <Dropdown.Menu className="log-filter">
                <Dropdown.Header>Filter By:</Dropdown.Header>  
                <Form className="dropdown-form p-4">  
  
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Sort By:  &nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                        <Form.Check inline type="radio" name="group1" label="latest"/>
                        <Form.Check inline type="radio" name="group1" label="oldest"/>
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>DateTime:</Form.Label>
                        <Form.Control type="datetime-local"/>
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formNoPerkara">
                        <Form.Label>No Perkara:</Form.Label>
                        <Form.Control type="text" placeholder="..." />
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formNoTxt">
                        <Form.Label>Search Text:</Form.Label>
                        <Form.Control type="text" placeholder="..." />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">Filter</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="success" type="submit">Reset</Button>
                </Form> 
            </Dropdown.Menu>
  
        </Dropdown>
    );
  };
  
  const ActionMenu = (id_log) => {
      
    const handleSelect = (eventKey) => {
        console.log("id===>", id_log['idLog']);
        console.log("Selected event key:", eventKey);
      };
  
    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle as={CustomToggle}>
                <MoreVertical size="15px" className="text-muted" />
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'}>
                <Dropdown.Item eventKey="1">
                    View Detail
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                    Edit
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                    Delete
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
  };
  
  const Paginations = () => {
    return (<Pagination className="justify-content-end">
        <Pagination.Prev disabled>Previous</Pagination.Prev> 
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>                                
        <Pagination.Item>{3}</Pagination.Item>      
        <Pagination.Next>Next</Pagination.Next>
    </Pagination>)
  }

  return (
    <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-0">Tabel Perkara</h4>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-end">
                                    <ActionFilter/>
                                </div>
                            </div>
                        </div>

                    </Card.Header>
                    <Table responsive className="text-nowrap mt-5 mb-12">
                        <thead className="table-light">
                            <tr>
                                <th>NO</th>
                                <th>Reg ID</th>
                                <th>JENIS PENGADILAN & PERKARA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log("=========> reg id \n" + dataTable[0]['jns_perkara_reg_id'])}
                            {console.log("=========> jns_perkara \n" + dataTable[0]['jns_perkara'])} */}

                            {dataTable.map((row, index) => (
                                <tr key={dataTable[index]['jns_perkara_reg_id']}>
                                    <td className="align-middle"> {row_number + 1} </td>
                                    <td className="align-middle">
                                        <Form.Control
                                            type="text"
                                            value={dataTable[index]['jns_perkara_reg_id']}
                                            onChange={(e) => handleInputChange(dataTable[index]['id'], 'regID', e.target.value)}
                                        />
                                    </td>
                                    <td className="align-middle">
                                        <Form.Control
                                            type="text"
                                            value={dataTable[index]['jns_perkara']}
                                            onChange={(e) => handleInputChange(dataTable[index]['id'], 'jnsPerkara', e.target.value)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    
                    <Card.Footer className="bg-white">
                        <Paginations/>
                        {/* <Link href="#" className="link-primary">View All Projects</Link> */}
                    </Card.Footer>

                </Card>
            </Col>
        </Row>
  )
}

export default RegIDTable