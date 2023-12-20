import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import './TabsDisplay.css'
import sprite from '../images/me_sprite.png'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
const TabsDisplay = () => {
    return (
        
        <div className='tabs-display'>
            <img src= {sprite} className='sprite' alt = ''></img>
    <Tabs
        justify variant='pills'
        defaultActiveKey="about"
        id="justify-tab-example"
        className='mb-3 myTabs'
        
    >
        <Tab eventKey = "about" title= "about me" tabClassName='tabs-button'>
            <div className = 'field'>
            <About/>
            </div>
        </Tab>
        <Tab eventKey = "works" title = "experience" tabClassName='tabs-button'>
            <div className='field'>
            <Experience/>
            </div>
        </Tab>
        <Tab eventKey = "resume" title = "contact/resume" tabClassName='tabs-button'>
            <Contact/>
        </Tab>
    </Tabs>
    </div>
    )
}
export default TabsDisplay;