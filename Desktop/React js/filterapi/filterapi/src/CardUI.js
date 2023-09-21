
import Card from 'react-bootstrap/Card';

function CardUI({data}) {
    console.log(data);

    const { strMeal,strCategoryThumb, strMealThumb,strCategory,strCategoryDescription } = data

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strCategoryThumb || strMealThumb} />
      <Card.Body>
        <Card.Title>{strCategory||strMeal}</Card.Title>
        <Card.Text>{strCategoryDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardUI;