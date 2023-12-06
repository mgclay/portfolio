import './Main.css'
import { useNavigate } from 'react-router-dom';
import TabsDisplay from './TabsDisplay.js'
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
const Main = () => {
    
    return (
        <div className='everything'>
        <TabsDisplay/>
        </div>
    )
}
export default Main;