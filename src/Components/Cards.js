import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return ( 
        <>
        <Card style={{ width: 300 }} className='card'>
                <Card.Img variant="top" src="greeksalad.jpg" width='300px' height='200px' className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title><b>Greek Salad</b></Card.Title>
                    <Card.Text>
                    The famous gree salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                    </Card.Text>
                    <Button variant="primary" className='orderabutton'>Order a Delivery</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: 300 }} className='card'>
                <Card.Img variant="top" src="bruchetta.svg" width='300px' height='200px' className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title><b>Bruschetta</b></Card.Title>
                    <Card.Text>
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, a perfect amount of crunch. 
                    </Card.Text>
                    <Button variant="primary" className='orderabutton'>Order a Delivery</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: 300 }} className='card'>
                <Card.Img variant="top" src="lemondessert.jpg" width='300px' height='200px' className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title><b>Lemon Dessert</b></Card.Title>
                    <Card.Text>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                    </Card.Text>
                    <Button variant="primary" className='orderabutton'>Order a Delivery</Button>
                </Card.Body>
            </Card>
            </>
     );
}

export default Cards;