'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeadingWithButton } from 'widgets'

// import sub components
import CaseSetting from 'sub-components/settings/CaseSetting';

const Settings = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeadingWithButton heading="Add Case" btn_txt="Case List" />

      {/* General Settings */}
      <CaseSetting />

    </Container>
  )
}

export default Settings