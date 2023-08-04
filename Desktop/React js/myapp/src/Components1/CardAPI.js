import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardAPI(props) {
  console.log(props);
  const {strCategory,strCategoryThumb,strCategoryDescription} = props.data
  return (
    
    <Card style={{ width: '18rem',border: "3px solid black",
    marginTop: "1rem",
    marginLeft: "1rem",
    boxShadow:"1px 4px 5px black",
    borderRadius: "1rem" }}>
      <Card.Img variant="top" src={strCategoryThumb}  />
      <Card.Body className='b'>
        <Card.Title className='color'>{strCategory}</Card.Title>
        <Card.Text className='text'>
         {strCategoryDescription}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default CardAPI;