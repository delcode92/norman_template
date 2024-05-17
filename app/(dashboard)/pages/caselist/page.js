'use client'
// import node module libraries

import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import CaseTable from 'sub-components/tables/CaseTable';

const CaseList =   () => {
  

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