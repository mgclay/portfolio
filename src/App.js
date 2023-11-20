// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          HELLO!!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About.js'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
      <Route path = "/portfolio" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    // <div className='App'> hHELLO!!!!!!!!!</div>
  );
  };
export default App

