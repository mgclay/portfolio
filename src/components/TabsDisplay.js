import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import './TabsDisplay.css'
import sprite from '../images/me_sprite.png'
import About from './About'
const TabsDisplay = () => {
    return (
        <div>
            <img src= {sprite} className='sprite' alt = ''></img>
        <div className='tabs-display'>
    <Tabs
        justify variant='pills'
        defaultActiveKey="about"
        id="justify-tab-example"
        className='mb-3 myTabs'
        
    >
        <Tab eventKey = "about" title= "about me" tabClassName='tabs-button'>
            <About/>

        </Tab>
        <Tab eventKey = "works" title = "experience" tabClassName='tabs-button'>
            
        </Tab>
        <Tab eventKey = "resume" title = "contact/resume" tabClassName='tabs-button'>

        </Tab>
    </Tabs>
    </div>
    </div>
    )
}
export default TabsDisplay;