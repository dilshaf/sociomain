
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    const{titles,posters,description}=props.data
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{titles}</Card.Title>
        <Card.Text>
          {posters}
        </Card.Text>
        <Card.Text>
          {description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;