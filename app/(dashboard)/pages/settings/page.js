'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
// import PageHeadingWithButton from 'widgets';
import { PageHeading, PageHeadingWithButton } from 'widgets'

// import sub components
import {GeneralSetting} from 'sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeadingWithButton heading="Add Assistant" btn_txt="Assistant List" />

      {/* General Settings */}
      <GeneralSetting heading="Asisten Pendamping" table_name="asisten"/>

      {/* Email Settings */}
      {/* // DONE ... <EmailSetting /> */}

      {/* Settings for Preferences */}
      {/* // DONE ...<Preferences /> */}

      {/* Settings for Notifications */}
      {/* <Notifications /> */}

      {/* Delete Your Account */}
      {/* <DeleteAccount /> */}

    </Container>
  )
}

export default Settings