'use client'
// I have nextJS code like below, I want when dropdown item clicked it will get some value and show it on console
// import node module libraries
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Col, Row, Card, Table, Modal , Dropdown, Pagination, Form, Button, FloatingLabel, Alert } from 'react-bootstrap';
import { MoreVertical, Filter } from 'react-feather';
// import { useRouter } from 'next/router';


// import required data files
// import ActiveProjectsData from "data/dashboard/ActiveProjectsData";


const ActiveProjects =  () => {
    // const router = useRouter();

    // Cek Session
    // var stat = localStorage.getItem('isLoggedIn');
    // if(stat != 'true'){
    //     router.push('/login');
    // }

    const [show, setShow] = useState(false);
    const [dataTable, setDataTable] = useState([{id:'', log_time: '', no_perkara: '', namaAsisten: 'John', log_text: '', status: 'Active'}]);
    // const [text, setText] = useState('');
    const [logID, setLogID] = useState('');
    const [logTxt, setLogTxt] = useState('');
    const [updateStat, setUpdateStat] = useState(false);

    // const initialData = [{
    //     id: '',
    //     log_time: '',
    //     no_perkara: '',
    //     namaAsisten: 'John',
    //     log_text: '',
    //     status: 'Active'
    //   }];

      useEffect(() => {
        // const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_SERVER_HOST}/get_active_logs`);
        const eventSource = new EventSource('/api/logs-stream',{
            withCredentials: true,
          });
    
        eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log(data);
          setDataTable(data);
        };
    
        eventSource.onerror = (error) => {
          console.error('SSE error:', error);
          eventSource.close();
        };
    
        return () => {
          eventSource.close();
        };
      }, []);

    // useEffect(() => {
    //     let eventSource;
        
    //     const connectSSE = () => {
    //       eventSource = new EventSource('/api/logs-stream');
          
    //       eventSource.onopen = () => {
    //         console.log('SSE connection opened');
    //       };
      
    //       eventSource.onmessage = (event) => {
    //         try {
    //           console.log('Raw event data:', event.data); // Debug log
    //           const data = JSON.parse(event.data);
    //           console.log('Parsed data:', data);
    //           setDataTable(data);
    //         } catch (error) {
    //           console.error('Error parsing SSE data:', error);
    //           console.log('Problematic data:', event.data);
    //         }
    //       };
      
    //       eventSource.onerror = (error) => {
    //         console.error('SSE error:', error);
    //         if (eventSource.readyState === EventSource.CLOSED) {
    //           console.log('Connection was closed');
    //           // Try to reconnect after 5 seconds
    //           setTimeout(connectSSE, 5000);
    //         } else if (eventSource.readyState === EventSource.CONNECTING) {
    //           console.log('Attempting to reconnect');
    //         }
    //       };
    //     };
      
    //     connectSSE();
      
    //     return () => {
    //       if (eventSource) {
    //         console.log('Cleaning up SSE connection');
    //         eventSource.close();
    //       }
    //     };
    //   }, []);









    // const useSSE = (initialData) => {
    //     const [dataTable, setDataTable] = useState(initialData);
    //     const [error, setError] = useState(null);
    //     const [status, setStatus] = useState('disconnected');
      
    //     useEffect(() => {
    //       let eventSource = null;
      
    //       const connect = () => {
    //         try {
    //           // Close existing connection if any
    //           if (eventSource) {
    //             eventSource.close();
    //           }
      
    //           eventSource = new EventSource(`${process.env.NEXT_PUBLIC_SERVER_HOST}/get_active_logs`, {
    //             withCredentials: true // Enable credentials if needed
    //           });
      
    //           eventSource.onopen = () => {
    //             setStatus('connected');
    //             console.log('Connected to SSE');
    //           };
      
    //           eventSource.addEventListener('update', (event) => {
    //             try {
    //               const data = JSON.parse(event.data);
    //               setDataTable(data || initialData); // Remove .message since we're sending rows directly
    //             } catch (err) {
    //               setError(err);
    //               setDataTable(initialData);
    //             }
    //           });
      
    //         eventSource.onerror = (err) => {
    //             console.error('SSE Error:', err);
    //             setStatus('error');
    //             setError(err);
                
    //             // Close the connection on error and try to reconnect
    //             if (eventSource) {
    //               eventSource.close();
    //             }
    //             setTimeout(connect, 5000); // Retry connection after 5 seconds
                
    //         };
            
    //         } catch (err) {
    //           setError(err);
    //           setStatus('error');
    //         }
    //       };
      
    //       // Initial connection
    //       connect();
      
    //       // Cleanup on component unmount
    //       return () => {
    //         if (eventSource) {
    //           eventSource.close();
    //           setStatus('disconnected');
    //         }
    //       };
    //     }, []); // Empty dependency array means this runs once on mount
      
    //     return { dataTable, error, status };
    // };
    
    // const { dataTable, error, status } = useSSE(initialData);

    /*
    useEffect(() => {
        const intervalId = setInterval( async () => {
            
              await fetch(process.env.NEXT_PUBLIC_SERVER_HOST + "/get_active_logs")
              .then(
                // must I use response code below ?
                response => response.json()
        
                )
              .then(
                // why not just immediatley this code ?
                  datas => {
                    setDataTable(datas);
                  }
                 )
                 
                }, 5000);
        }, []);
    */

    const handleClose = () => {
        setUpdateStat(false);
        setShow(false);
    }
    const handleShow = () => setShow(true);

    // I have nextJS code like below why handleClose() not being executed after POST data ?
    const handleSaveEdit = async () => {
        // SAVE EDITED LOG
        // console.log("POST DATA==>");
        // console.log("Log ID==>", logID);
        // console.log("Log TXT==>", logTxt);

        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST+'/save_log_edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ logID, logTxt }),
            }).then(
                setUpdateStat(true)
            );

        // CLOSE MODAL
        // handleClose();
        // console.log("end of exec");

    }

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
                        {/* 
                            1. sort by (radio newest-latest)
                            2. date
                            3. no perkara 
                            4. words
                        */}
                        {/* <Form.Group className="mb-3">
                        </Form.Group> */}
    
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
        const handleSelect = async (eventKey) => {
            
            setLogID( id_log['idLog'] );
           
            console.log("id===>", id_log['idLog']);
            // console.log("Selected event key:", eventKey);
            
            // VIEW DETAIL
            if(eventKey==1){
            }
            // EDIT 
            else if(eventKey==2){
                
                // SHOW MODAL   
                handleShow();
                
                // SET TEXT AREA VALUE
                await fetch(process.env.NEXT_PUBLIC_SERVER_HOST+"/get_log_edit/" + id_log['idLog'] )
                                .then( response => response.json() )
                                .then( data => { 
                                    setLogTxt( data[0]['log_text'] );
                                    // console.log("masuk: ", ); 
                                } );
            }
            // DELETE
            else if(eventKey==3){
                if(confirm("DELETE ??? ")){
                    const response = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST+'/delete_log', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ logID:id_log['idLog'] }),
                                    })
                }
            }
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
    
    // console.log(dataTable);

    // MODAL HANDLE TEXTAREA
    const handleChange = (event) => {
        setLogTxt(event.target.value);
    };


    return (
        
        <Row className="mt-6">
            
            {/* MODAL */}
            <Modal className="modal-dialog-scrollable" size="lg" show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Log Activity</Modal.Title>
                </Modal.Header>
                
                <Modal.Body  style={{height:'250px'}}>
                    {updateStat && <Alert variant="success">DATA SAVED!</Alert>}
                    <Form>
                        <Row className="mb-3">
                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="log">Log Activity</Form.Label>
                            <Col md={10} xs={12}>
                                <FloatingLabel controlId="log">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="..."
                                        style={{ height: '100px' }}
                                        value={logTxt} // Bind the state to the value prop
                                        onChange={handleChange} //
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
                
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-0">Log Activity</h4>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-end">
                                    <ActionFilter/>
                                </div>
                            </div>
                        </div>

                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>NO</th>
                                <th>WAKTU</th>
                                <th>ID PERKARA</th>
                                <th>ASISTEN PENDAMPING</th>
                                <th>LOG</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataTable.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle"> {index+1} </td>
                                        <td className="align-middle">{new Date(item.log_time).toLocaleString()}</td>
                                        <td className="align-middle"><span className="badge bg-info bg-purple p-2">{item.no_perkara}</span></td>
                                        <td className="align-middle">
                                            <div className="avatar-group">
                                                ...
                                                {/* {item.members.map((avatar, avatarIndex) => {
                                                    return (
                                                        <span className="avatar avatar-sm" key={avatarIndex}>
                                                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                        </span>
                                                    )
                                                })} */}

                                                {/* <span className="avatar avatar-sm avatar-primary">
                                                    <span className="avatar-initials rounded-circle fs-6">+2</span>
                                                </span> */}
                                            </div>
                                        </td>
                                        <td className="align-middle text-dark">
                                            {/* <div className="float-start me-3">{item.progress}%</div> */}
                                            <div className="mt-2">
                                                <p>{item.log_text}</p>
                                            </div>
                                        </td>
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

export default ActiveProjects