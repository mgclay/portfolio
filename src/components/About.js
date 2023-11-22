import { useNavigate } from 'react-router-dom';
import TabsDisplay from './TabsDisplay.js'
import { Card } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div>
        <h1 className='greetings'> Hi! I'm Mary.</h1>
        {/* <Card className= 'card' border='0'>
            <Card.Body> hellllllllooooooooooooooo abouuuuuuuuuuuut meeeeeeeeeeeeeeeeee</Card.Body>
        </Card> */}
        <h2 className='about-section'> hellooooooooooooooooo about meeeeeeeeeeeeee</h2>
        </div>
    )
}
export default About;