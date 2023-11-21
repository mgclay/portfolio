import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About.js'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
      <Route path = "/portfolio" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
  };
export default App

