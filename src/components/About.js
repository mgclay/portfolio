import { useNavigate } from 'react-router-dom';
import TabsDisplay from './TabsDisplay.js'
const About = () => {
    const nav = useNavigate();
    return (
        <TabsDisplay/>
    )
}
export default About;