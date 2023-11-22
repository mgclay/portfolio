import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './components/Main.js'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path = "/portfolio" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
  };
export default App

