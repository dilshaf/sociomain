import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardUI(props) {

  const {strCategory,strCategoryThumb,strCategoryDescription} = props.data
  
  return (
    <Card style={{ width: '18rem',height:"500px",overflow:'auto',border:'1px solid white',borderRadius:'4px',padding:'10px',margin:'10px' }}>
      <Card.Img variant="top" src={strCategoryThumb} />
      <Card.Body>
        <Card.Title>{strCategory}</Card.Title>
        <Card.Text>
          {strCategoryDescription}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardUI;