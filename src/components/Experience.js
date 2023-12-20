import { Card } from 'react-bootstrap';
import './About.css'
import Cat from './MeWithCat'
const Experience = () => {
    return (
        <div className='contents'>
        <Card className='card' border='0'>
        <Card.Header  className='greetings' >My experience.</Card.Header>

            <Card.Body> study buddy n stuff</Card.Body>
        </Card>
        <Cat/>
        </div>
    )
}

export default Experience