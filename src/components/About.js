import { useNavigate } from 'react-router-dom';
import TabsDisplay from './TabsDisplay.js'
import { Card } from 'react-bootstrap';
import './About.css'
import SpriteWave from './SpriteWave'
import me from '../images/me.jpg'
const About = () => {
    return (
        <div className='contents'>
        <Card className='card' border='0'>
        <Card.Header  className='greetings' >Hi! I'm Mary. </Card.Header>
            <Card.Body> 
                I'm a recent graduate from Temple University with a BS in Computer Science. I'm very excited to start my career in software development,
                and I made this W.I.P. portfolio to showcase my frontend skills.
            </Card.Body>
            <Card.Body>
            This portfolio is built in React.js, and decorated with pixel art I made myself!
            </Card.Body>

            {/* <img src = {me} className='portrait'></img> */}
        </Card>
        <SpriteWave/>
        <div className='second-row'>
        </div>
        <Card.Body>

        </Card.Body>

        </div>
    )
}
export default About;
