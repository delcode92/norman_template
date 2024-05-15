// import node module libraries
import { Row, Col, Button} from 'react-bootstrap';

const PageHeadingWithButton = props => {
  const { heading, btn_txt } = props;
  var target_link = "";
  
  if(btn_txt.toLowerCase() == "case list"){
    target_link = "/pages/caselist";
  }
  else if(btn_txt.toLowerCase() == "assistant list"){
    target_link = "/pages/astlist";
  }

  return (
    <Row>
      <Col lg={12} md={12} xs={12}>

      

        {/* Page header */}
        <div className="border-bottom pb-4 mb-4 ">
          <div className="row">
              <div className="col-md-6">
                <h3 className="mb-0 fw-bold">{heading}</h3>
              </div>
              <div className="col-md-6">
                  <div className="d-flex justify-content-end">
                    <Button variant="outline-primary" href={target_link} className="me-1">{btn_txt}</Button> 
                  </div>
              </div>
          </div>
          
        </div>
      </Col>
    </Row>
  )
}

export default PageHeadingWithButton