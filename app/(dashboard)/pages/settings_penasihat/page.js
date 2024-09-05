'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
// import PageHeadingWithButton from 'widgets';
import { PageHeading, PageHeadingWithButton } from 'widgets'

// import sub components
import {GeneralSetting} from 'sub-components'

const SettingsPenasihat = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeadingWithButton heading="Tambah Penasihat Hukum" btn_txt="Data List" />

      {/* General Settings */}
      <GeneralSetting heading="Penasehat Hukum" table_name="penasehat_hukum"/>

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

export default SettingsPenasihat