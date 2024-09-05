// import node module libraries
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import {  Col, Row, Card, Table, Dropdown, Pagination, Form, Button } from 'react-bootstrap';
import { MoreVertical, Filter } from 'react-feather';

// import required data files
// import AstData from "data/dashboard/AstData";

// import hooks
// import useMounted from 'hooks/useMounted';

const AssistantTable = () => {
  // const hasMounted = useMounted();

  const [dataTable, setDataTable] = useState([{id:'', id_user: '', nama: '', email: '', hp: '', addr: '' }]);
  
  // const hasMounted = useMounted();
  useEffect(  () => {
    // fetch data from table perkara here
    fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/get_assistant")
        .then( response => response.json() )
        .then(
            data => {
            console.log("data ===>");
            console.log(data);
            setDataTable(data);
            }
        )

  }, []);

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
                {/* <Dropdown.Item eventKey="1">
                    View Detail
                </Dropdown.Item> */}
                <Dropdown.Item eventKey="1">
                    Edit
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                    Delete
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
  };
  
//   const Paginations = () => {
//     return (<Pagination className="justify-content-end">
//         <Pagination.Prev disabled>Previous</Pagination.Prev> 
//         <Pagination.Item>{1}</Pagination.Item>
//         <Pagination.Item active>{2}</Pagination.Item>                                
//         <Pagination.Item>{3}</Pagination.Item>      
//         <Pagination.Next>Next</Pagination.Next>
//     </Pagination>)
//   }
  
  return (
    <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-0">Tabel Asisten</h4>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-end">
                                    {/* <ActionFilter/> */}
                                </div>
                            </div>
                        </div>

                    </Card.Header>
                    <Table responsive className="text-nowrap mt-5 mb-12">
                        <thead className="table-light">
                            <tr>
                                <th>NO</th>
                                <th>Nama</th>
                                <th>EMAIL</th>
                                <th>HP</th>
                                <th>ALAMAT</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle"> {index+1} </td>
                                        <td className="align-middle">{item.nama}</td>
                                        <td className="align-middle">{item.email}</td>
                                        <td className="align-middle">{item.hp}</td>
                                        <td className="align-middle">{item.addr}</td>
                                        <td className="align-middle"> <ActionMenu idLog={item.id}/> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                </Card>
            </Col>
        </Row>
  )
}

export default AssistantTable