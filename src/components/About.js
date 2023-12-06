import { useNavigate } from 'react-router-dom';
import TabsDisplay from './TabsDisplay.js'
import { Card } from 'react-bootstrap';
import './About.css'
import SpriteWave from './SpriteWave'
const About = () => {
    return (
        <div className='contents'>
        <Card className='card' border='0'>
        <Card.Header  className='greetings' >Hi! I'm Mary. </Card.Header>

            <Card.Body> the quick brown fox jumps over the lazy dog</Card.Body>
        </Card>
        <SpriteWave/>
        </div>
    )
}
export default About;
