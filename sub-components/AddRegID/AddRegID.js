// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'


import RegIDTable from 'sub-components/tables/RegIDTable';

// import hooks
import useMounted from 'hooks/useMounted';


const AddRegID = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="Set RegID"/>

      {/* General Settings */}
      <RegIDTable />

    </Container>
  )
}

export default AddRegID