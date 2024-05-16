'use client'
// import node module libraries
import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import CaseTable from 'sub-components/tables/CaseTable';

const CaseList =   () => {
  
  useEffect(  () => {
    // fetch data from table perkara here
    fetch("https://www.tangkapdata2.my.id/get_perkara")
              .then(
                response => response.json()
                  
                )
              .then(
                // why not just immediatley this code ?
                  data => {
                    console.log("data ===>");
                    console.log(data);
                    // setDataTable(datas);
                  }
                 )

  }, []);

  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="Case Lists"/>

      {/* General Settings */}
      <CaseTable />

    </Container>
  )
}

export default CaseList