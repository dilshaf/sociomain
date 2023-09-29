import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({data}) {
    const{email,name,password}=data
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>name:{name}</Card.Title>
        <Card.Text>
         email:{email}
        </Card.Text>
        <Card.Text>
         password:{password}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;