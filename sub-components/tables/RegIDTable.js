// import node module libraries
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import {  Col, Row, Card, Table, Dropdown, Pagination, Form, Button } from 'react-bootstrap';
import { MoreVertical, Filter } from 'react-feather';

let index = 0;

const RegIDTable = () => {
//   let data = {
//     "reg.1": "pengadilan negeri",
//     "reg.1.1": "perdata umum",
//     "reg.1.1.1": "perdata gugatan",
//     "reg.1.1.1.1": "perbuatan melawan hukum",
//     "reg.1.1.1.1.1": "Ganti Rugi",
//     "reg.1.1.1.1.2": "Wanprestasi",
//     "reg.1.1.1.1.3": "Perceraian",
//     "reg.1.1.1.1.4": "Harta Bersama",
//     "reg.1.1.1.1.5": "lain-lain",
//     "reg.1.1.2": "perdata gugatan sederhana",
//     "reg.1.1.2.1": "perbuatan melawan hukum",
//     "reg.1.1.2.2": "Wanprestasi",
//     "reg.1.1.2.3": "lain-lain",
//     "reg.1.1.3": "perdata permohonan",
//     "reg.1.1.3.1": "pengampunan",
//     "reg.1.1.3.2": "perbaikan kesalahan dalam akta kelahiran",
//     "reg.1.1.3.3": "Pengangkatan Wali Bagi Anak",
//     "reg.1.1.3.4": "Akta Kematian",
//     "reg.1.1.3.5": "Permohonan Ganti Nama",
//     "reg.1.1.3.6": "Wali dan Izin Jual",
//     "reg.1.1.3.7": "lain-lain",
//     "reg.1.2": "perdata khusus",
//     "reg.1.2.1": "HKI",
//     "reg.1.2.2": "Partai Politik",
//     "reg.1.2.3": "Kepailitan & PKPU",
//     "reg.1.2.4": "Pengadilan Hubungan Industrial",
//     "reg.1.2.4.1": "Perselisihan Pemutusan Hubungan Kerja Massal",
//     "reg.1.2.4.2": "Perselisihan Pemutusan Hubungan Kerja Sepihak",
//     "reg.1.2.4.3": "Perselisihan Hak Pekerja Yang Sudah Diperjanjikan Tidak Dipenuhi",
//     "reg.1.2.4.4": "Pemutusan Hubungan Kerja Tanpa Memperhatikan Hak Pekerja",
//     "reg.1.2.4.5": "Perselisihan Pemutusan Hubungan Kerja Karena Pekerja Melakukan Tindak Pidana",
//     "reg.1.2.4.6": "Perselisihan Hubungan Kerja Karena Pekerja Indisipliner",
//     "reg.1.2.4.7": "Perselisihan Hak Pekerja Karena Upah Tidak Dibayar",
//     "reg.1.2.4.8": "lain-lain",
//     "reg.1.2.4.9": "KPPU",
//     "reg.1.3": "Pidana",
//     "reg.1.3.1": "Pencurian",
//     "reg.1.3.2": "Imigrasi",
//     "reg.1.3.3": "Penggelapan",
//     "reg.1.3.4": "Perlindungan Anak",
//     "reg.1.3.5": "Kejahatan Terhadap Nyawa",
//     "reg.1.3.6": "Penipuan",
//     "reg.1.3.7": "Kesehatan",
//     "reg.1.3.8": "Pengeroyokan",
//     "reg.1.3.9": "Penganiayaan",
//     "reg.1.3.10": "Pidana Pra Peradilan",
//     "reg.1.3.10.1": "Sah atau tidaknya penghentian penyidikan",
//     "reg.1.3.10.2": "Sah atau tidaknya penetapan tersangka",
//     "reg.1.3.10.3": "Sah atau tidaknya penangkapan",
//     "reg.1.3.10.4": "Sah atau tidaknya penahanan",
//     "reg.1.3.11": "Perkara Lalu Lintas",
//     "reg.1.3.12": "lain-lain",
//     "reg.2": "pengadilan tata usaha negara",
//     "reg.2.1": "perkara",
//     "reg.2.1.1": "perdata gugatan",
//     "reg.2.1.1.1": "Tender",
//     "reg.2.1.1.2": "Pertanahan",
//     "reg.2.1.1.3": "Kepala Desa dan Perangkat Desa",
//     "reg.2.1.1.4": "Kepegawaian",
//     "reg.2.1.1.5": "Perizinan",
//     "reg.2.1.1.6": "Tindakan Administrasi Pemerintah/Tindakan Faktual",
//     "reg.2.1.1.7": "Partai Politik",
//     "reg.2.1.1.8": "lain-lain",
//     "reg.2.1.2": "Permohonan UU AP",
//     "reg.2.1.2.1": "Permohonan Fiktif Positif",
//     "reg.2.1.2.2": "Lain-Lain",
//     "reg.2.1.3": "Gugatan Keberatan (KIP)",
//     "reg.2.1.3.1": "Keterbukaan Informasi Publik (KIP)",
//     "reg.2.1.3.2": "Lain-Lain",
//     "reg.3": "mahkamah syariyah",
//     "reg.3.1": "jinayat",
//     "reg.3.1.1": "Praperadilan Jinayat",
//     "reg.3.1.1.1": "Sah atau tidaknya penangkapan",
//     "reg.3.1.1.2": "Lain-Lain",
//     "reg.3.2": "Registrasi Perkara Jinayat",
//     "reg.3.2.1": "Maisir",
//     "reg.3.2.2": "Khamar",
//     "reg.3.2.3": "Pelecehan Seksual",
//     "reg.3.2.4": "Pemerkosaan",
//     "reg.3.2.5": "Ikhtilath",
//     "reg.3.2.6": "Khalwat",
//     "reg.3.2.7": "Zina",
//     "reg.3.2.8": "Lain-Lain",
//     "reg.3.3": "jinayat anak",
//     "reg.3.3.1": "Register Perkara Jinayat Anak",
//     "reg.3.3.1.1": "Pemerkosaan",
//     "reg.3.3.1.2": "Lain-Lain"
//   }
  

//   const [dataTable, setDataTable] = useState([{reg_id:'', jns_perkara: ''}]);
  const [dataTable, setDataTable] = useState({});
  const [inputRegID, setInputRegID] = useState('');
  const [inputJnsPerkara, setInputJnsPerkara] = useState('');

  const [rows, setRows] = useState(
    Object.entries(dataTable).map(([key, value]) => ({
        regID: key,
        jnsPerkara: value
    }))
  );

    // const hasMounted = useMounted();
    useEffect(  () => {
        // fetch data from table jns_perkara here
        fetch( process.env.NEXT_PUBLIC_SERVER_HOST + "/get_jns_perkara")
            .then( response => response.json() )
            .then(
                data => {

                    // console.log("from DB====>");
                    // console.log(data[0]['list_jns_perkara']);
                    setDataTable(data[0]['list_jns_perkara']);

                    setRows(Object.entries(data[0]['list_jns_perkara']).map(([key, value]) => ({
                        regID: key,
                        jnsPerkara: value
                    })));
                }
            )

    }, []);

  

  
  // Handle change for a specific row
  const handleInputChange = async (index, field, value) => {
    const updatedRows = [...rows];
    let old_key = "";
    let new_key = ""
    if(field=="regID"){
        old_key = updatedRows[index][field];
        new_key = value;
    }
    updatedRows[index][field] = value;
    
    console.log("ulr: " + process.env.NEXT_PUBLIC_SERVER_HOST);

    const response = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST + '/update_regid', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ old_key, new_key, value }),
    }).then(
        setRows(updatedRows)
    );

    console.log("\n===============")
    console.log(response);
    console.log("===============\n")


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
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td className="align-middle"> {index + 1} </td>
                                    <td className="align-middle">
                                        <Form.Control
                                            type="text"
                                            value={row.regID}
                                            onChange={(e) => handleInputChange(index, 'regID', e.target.value)}
                                        />
                                    </td>
                                    <td className="align-middle">
                                        <Form.Control
                                            type="text"
                                            value={row.jnsPerkara}
                                            onChange={(e) => handleInputChange(index, 'jnsPerkara', e.target.value)}
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