'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// import widget/custom components
import { StatRightTopIcon } from "widgets";
import { ActiveProjects} from "sub-components";

// import sub components
// import { ActiveProjects, Teams, 
//     TasksPerformance 
// } from "sub-components";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";

// import { loadComponents } from "next/dist/server/load-components";

const Home = () => {
    
    const [messages, setMessages] = useState([]);
    const [dataTable, setDataTable] = useState([{id:'', log_time: '', no_perkara: '', namaAsisten: 'John', log_text: '', status: 'Active'}]);

    // useEffect(() => {
    //     const eventSource = new EventSource('http://localhost:8082/get_active_logs');
    
    //     eventSource.onmessage = (event) => {
    //       const data = JSON.parse(event.data);
    //       // setMessages((prev) => [...prev, `${data.timestamp}: ${data.message}`]);
    //       console.log(data);
    //       setDataTable(data)
    
    //     };
    
    //     eventSource.onerror = (error) => {
    //       console.error('SSE error:', error);
    //       eventSource.close();
    //     };
    
    //     return () => {
    //       eventSource.close();
    //     };
    //   }, []);

      
    return (
        <Fragment>
            <div className="bg-cobalt-blue pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <Image src="/images/brand/logo/norman_logo.png" alt="" />
                                    {/* <h3 className="mb-0  text-white">Projects</h3> */}
                                </div>
                                <div>
                                    <Link href="/pages/addcase" className="btn btn-danger">Add Case</Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {ProjectsStatsData.map((item, index) => {
                        return (
                            <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                <StatRightTopIcon info={item} />
                            </Col>
                        )
                    })}
                    
                </Row>

                {/* Active Projects  */}
                <ActiveProjects />

                <Row className="my-6">
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

                        {/* <TasksPerformance /> */}

                    </Col>
                    <Col xl={8} lg={12} md={12} xs={12}>

                        {/* <Teams /> */}

                    </Col>
                </Row>

                
            </Container>
        </Fragment>
    )
}
export default Home;