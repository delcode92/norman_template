// import node module libraries
import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import {
    Col,
    Row,
    Card,
    Table,
    Dropdown,
    Pagination,
    Form,
    Button,
} from "react-bootstrap";
import { MoreVertical, Filter } from "react-feather";



const RegIDTable = () => {
    const inputRef = useRef(null);
    const [dataTable, setDataTable] = useState([]);
    const [inputRegID, setInputRegID] = useState("");
    const [inputJnsPerkara, setInputJnsPerkara] = useState("");
    const [changedRows, setChangedRows] = useState({});
    const [rowInputs, setRowInputs] = useState({});
    
    //   const [rows, setRows] = useState(
    //     Object.entries(dataTable).map(([key, value]) => ({
    //         regID: key,
    //         jnsPerkara: value
    //     }))
    //   );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    process.env.NEXT_PUBLIC_SERVER_HOST + "/get_jns_perkara"
                );
                const data = await response.json();

                setDataTable(data);

                const initialInputs = {};
                data.forEach(row => {
                    initialInputs[row.id] = { regId: row.jns_perkara_reg_id, jns_perkara: row.jns_perkara };
                });
                setRowInputs(initialInputs);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Handle change for a specific row
    const handleChangeRegID = (id, field, e) => {
        const { name, value } = e.target;
        setRowInputs(prev => ({
            ...prev,
            [id]: { ...prev[id], [field]: value }
        }));

        setChangedRows((prev) => ({ ...prev, [id]: true }));
    };

    const handleChangeJnsPerkara = (id, field, e) => {
        const { name, value } = e.target;
        setRowInputs(prev => ({
            ...prev,
            [id]: { ...prev[id], [field]: value }
        }));

        setChangedRows((prev) => ({ ...prev, [id]: true }));
    };

    const handleSave = async (id) => {
        
        console.log(rowInputs[id]["regId"], rowInputs[id]["jns_perkara"]);
        let RegID = rowInputs[id]["regId"];
        let jns_perkara = rowInputs[id]["jns_perkara"];

        const responseClient = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST +'/update_regid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, RegID, jns_perkara }),
        });
    
        const data = await responseClient.json();
        console.log(data);

        setChangedRows(prev => ({ ...prev, [id]: false }));
    };

    const handleCancel = (id) => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    process.env.NEXT_PUBLIC_SERVER_HOST + "/get_jns_perkara"
                );
                const data = await response.json();

                // setDataTable(data);

                const initialInputs = {};
                data.forEach(row => {
                    initialInputs[row.id] = { regId: row.jns_perkara_reg_id, jns_perkara: row.jns_perkara };
                });
                setRowInputs(initialInputs);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        setChangedRows(prev => ({ ...prev, [id]: false }));
    };

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
                console.log("ref value: ", ref);
            }}
            className="text-muted text-primary-hover"
        >
            {children}
        </Link>
    ));

    CustomToggle.displayName = "CustomToggle";

    const ActionFilter = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <Filter size="15px" className="text-muted" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="log-filter">
                    <Dropdown.Header>Filter By:</Dropdown.Header>
                    <Form className="dropdown-form p-4">
                        <Form.Group className="mb-3" controlId="formNoTxt">
                            <Form.Label>Search Text:</Form.Label>
                            <Form.Control type="text" placeholder="..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Filter
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="success" type="submit">
                            Reset
                        </Button>
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    const ActionMenu = (id_log) => {
        const handleSelect = (eventKey) => {
            console.log("id===>", id_log["idLog"]);
            console.log("Selected event key:", eventKey);
        };

        return (
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={"end"}>
                    <Dropdown.Item eventKey="1">View Detail</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Edit</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    const Paginations = () => {
        return (
            <Pagination className="justify-content-end">
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
            </Pagination>
        );
    };

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
                                    <ActionFilter />
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log("=========> reg id \n" + dataTable[0]['jns_perkara_reg_id'])}
                            {console.log("=========> jns_perkara \n" + dataTable[0]['jns_perkara'])} */}
                            {dataTable.map((row, index) => (
                                <tr key={dataTable[index]["jns_perkara_reg_id"]}>
                                    <td className="align-middle"> {index+1} </td>
                                    <td className="align-middle">
                                        <Form.Control
                                            key={"regid_" + row.id}
                                            type="text"
                                            name={row.id}
                                            
                                            value={rowInputs[row.id]["regId"]}

                                            // value={row["jns_perkara_reg_id"]}
                                            // value={inputs}
                                            onChange={(e) => handleChangeRegID(row.id, "regId", e)}
                                        />
                                    </td>
                                    <td className="align-middle">
                                        <Form.Control
                                            key={"jns_perkara_" + row.id}
                                            type="text"
                                            value={rowInputs[row.id]["jns_perkara"]}
                                            onChange={(e) =>
                                                handleChangeJnsPerkara(row.id, "jns_perkara", e)
                                            }
                                        />
                                    </td>
                                    <td>
                                        {/* change this display show or hide if, one for two input above has triggered by onchange on each component*/}
                                        <div
                                            className={changedRows[row.id] ? "" : "visually-hidden"}
                                        >
                                            <Button variant="success" onClick={() => handleSave(row.id)}>
                                                save
                                            </Button>
                                            &nbsp;&nbsp;
                                            <Button variant="danger" onClick={() => handleCancel(row.id)}>
                                                cancle
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* <Card.Footer className="bg-white"> */}
                        {/* <Paginations /> */}
                        {/* <Link href="#" className="link-primary">View All Projects</Link> */}
                    {/* </Card.Footer> */}
                </Card>
            </Col>
        </Row>
    );
};

export default RegIDTable;
