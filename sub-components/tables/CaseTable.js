// import node module libraries
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import {  Col, Row, Card, Table, Dropdown, Pagination, Form, Button } from 'react-bootstrap';
import { MoreVertical, Filter } from 'react-feather';

// import required data files
// import CaseData from "data/dashboard/CaseData";

// import hooks
// import useMounted from 'hooks/useMounted';

const CaseTable = () => {

  const [dataTable, setDataTable] = useState(
    [{id:'', id_client: '', no_perkara: '',  jns_perkara: '', judul: '', deskripsi: '', nm_penggugat:'', nm_tergugat:'', tgl_dibuat_perkara:'', tgl_selesai_perkara:'-'}]
    );
  
  // const hasMounted = useMounted();
  useEffect(  () => {
    // fetch data from table perkara here
    fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/get_perkara")
        .then( response => response.json() )
        .then(
            data => {
            // console.log("data ===>");
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

//   const getNamaPenggugat = (id) => {
//     var nm_penggugat = "";

//     // fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/get_nama_client?id_client="+id)
//     //     .then( response => response.json() )
//     //     .then(
//     //         data => {
//     //             nm_penggugat = data[0].nm_client;
                
//     //             // this is show data
//     //             console.log("nm_penggugat: ", nm_penggugat);
                
//     //         }
//     //     );

//     // // but this is empty
//     // console.log("nm_penggugat: ", nm_penggugat);
//     return id
//   }

  const NamaPenggugatCell = ({ id_client }) => {
    const [namaPenggugat, setNamaPenggugat] = useState("");
  
    if(id_client){
    useEffect(() => {
      const fetchNamaPenggugat = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/get_nama_client?id_client=${id_client}`);
          const data = await response.json();
          setNamaPenggugat(data[0].nm_client);
        } catch (error) {
            console.log("")
            //   console.error("Error fetching nama penggugat:", error);
            //   setNamaPenggugat("Error");
        }
      };
  
      fetchNamaPenggugat();
    }, [id_client]);
  
    return <td className="align-middle">{namaPenggugat}</td>;
    }
    else{
        return <td className="align-middle"></td>;
    }
  };  

const getNamaTergugat = (arr_tergugat) => {
    let str_nama = "";

    console.log("===== arr tergugat =====");
    console.log(arr_tergugat);

    if(arr_tergugat){
        arr_tergugat.map((item, index) => {
            if(item){
                str_nama = str_nama + item + " ,";
            }
        });
    }
    

    return str_nama
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
                                <th>NO PERKARA</th>
                                <th>JNS PERKARA</th>
                                <th>JUDUL</th>
                                <th>PENGGUGAT</th>
                                <th>TERGUGAT</th>
                                <th>DESKRIPSI</th>
                                <th>WAKTU DIBUAT</th>
                                <th>WAKTU SELESAI</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((item, index) => {
                                return (

                                    /*
                                    deskripsi: "test deskripsi"
                                        ​​
                                        id: 10
                                        ​​
                                        id_client: 22
                                        ​​
                                        jns_perkara_order: "->pengadilan-negeri->perdata-umum->perdata-gugatan->perbuatan-melawan-hukum"
                                        ​​
                                        judul: "terst judul"
                                        ​​
                                        no_perkara: "12"
                                        ​​
                                        tgl_dibuat_perkara: "2024-10-18T11:07:14.231Z"

                                    */
                                    // <tr key={index}>
                                    //     <td>data</td>
                                    // </tr>

                                    <tr key={index}>
                                        <td className="align-middle"> {index+1} </td>
                                        <td className="align-middle"><span className="badge bg-info bg-purple p-2">{item.no_perkara}</span></td>
                                        <td className="align-middle">{item.jns_perkara_order}</td>
                                        <td className="align-middle">{item.judul}</td>

                                        {/* <td className="align-middle text-dark">{item.nm_penggugat}</td>
                                        <td className="align-middle">{item.nm_tergugat}</td> */}
                                        
                                        {/* <td className="align-middle">{getNamaPenggugat(item.id_client)}</td> */}
                                        <NamaPenggugatCell id_client={item.id_client} />
                                        {/* <td className="align-middle">{item.para_pihak_tergugat[0]}</td> */}
                                        <td className="align-middle">{getNamaTergugat(item.para_pihak_tergugat)}</td>
                                        
                                        <td className="align-middle">{item.deskripsi}</td>
                                        <td className="align-middle">{item.tgl_dibuat_perkara}</td>
                                        <td className="align-middle">--</td>
                                        <td className="align-middle"> <ActionMenu idLog={item.id}/> </td>
                                    </tr>
                                )
                            })}
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

export default CaseTable