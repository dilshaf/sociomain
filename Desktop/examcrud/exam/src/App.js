import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GetDetails from './GetDetails';
import Search from './Search';
import { movies } from './data';

function FormExample() {
  return (
    <>
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <h3 style={{color:'green'}}>MOVIEDATABASE</h3>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
           {/* <Search details={movies}/> */}
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    <GetDetails/>
    </>

    
  );
}

export default FormExample;

