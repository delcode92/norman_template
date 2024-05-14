// 'use client'
// I have nextJS code like below, I want when dropdown item clicked it will get some value and show it on console
// import node module libraries
import React from "react";
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image , Dropdown, Pagination } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import ActiveProjectsData from "data/dashboard/ActiveProjectsData";

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
                    Action
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                    Another action
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                    Something else here
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

const ActiveProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Log Activity</h4>
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
                            {ActiveProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle"> {index+1} </td>
                                        {/* <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                                        <Image src={item.brandLogo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-3 lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.projectName}</Link></h5>
                                                </div>
                                            </div>
                                        </td> */}
                                        <td className="align-middle">2024-02-20 12:12:20</td>
                                        <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg} bg-purple p-2`}>{item.priority}</span></td>
                                        <td className="align-middle">
                                            <div className="avatar-group">
                                                {item.members.map((avatar, avatarIndex) => {
                                                    return (
                                                        <span className="avatar avatar-sm" key={avatarIndex}>
                                                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                        </span>
                                                    )
                                                })}
                                                {/* <span className="avatar avatar-sm avatar-primary">
                                                    <span className="avatar-initials rounded-circle fs-6">+2</span>
                                                </span> */}
                                            </div>
                                        </td>
                                        <td className="align-middle text-dark">
                                            <div className="float-start me-3">{item.progress}%</div>
                                            <div className="mt-2">
                                                <ProgressBar now={item.progress} style={{ height: '5px' }} />
                                            </div>
                                        </td>
                                        <td className="align-middle"> <ActionMenu idLog={index}/> </td>
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