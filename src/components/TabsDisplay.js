import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import './TabsDisplay.css'

const TabsDisplay = () => {
    return (
        <div className='tabs-display'>
    <Tabs
        justify variant='pills'
        defaultActiveKey="about"
        id="fill-tab-example"
        className='mb-3 myTabs'
        fill
        // className="mb-3 pg-tabs"
        // justify
    >
        <Tab eventKey = "about" title= "about me" tabClassName='tabs-button'>

        </Tab>
        <Tab eventKey = "works" title = "experience" tabClassName='tabs-button'>
            
        </Tab>
        <Tab eventKey = "resume" title = "contact/resume" tabClassName='tabs-button'>

        </Tab>
    </Tabs>
    </div>
    )
}
export default TabsDisplay;