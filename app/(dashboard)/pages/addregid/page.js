'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
// import PageHeadingWithButton from 'widgets';
import { PageHeading, PageHeadingWithButton } from 'widgets'

// import sub components
import {AddRegID} from 'sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">


      {/* General Settings */}
      <AddRegID />


    </Container>
  )
}

export default Settings