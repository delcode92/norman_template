'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import AssistantTable from 'sub-components/tables/AssistantTable';

const AstList = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="Assistant Lists"/>

      {/* General Settings */}
      <AssistantTable />

    </Container>
  )
}

export default AstList