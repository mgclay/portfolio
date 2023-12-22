import { Card } from 'react-bootstrap';
import './About.css'
import Phone from './Phone'
const Contact = () => {
    return (
        <div className='contents'>
        <Card className='card' border='0'>
        <Card.Header  className='greetings' >Contact me.</Card.Header>
            <Card.Body> put socials and maybe email form</Card.Body>
        </Card>
        <Phone/>
        </div>
    ) 
}

export default Contact