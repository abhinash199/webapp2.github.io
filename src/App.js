
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
    
          <Route path="/" element ={<Home/>}/>
          <Route exact path="/movie/:id" element={<Detail/>} /> 
          <Route  path= "*" element={<Error/>} />    
       </Routes>
     
    </div>
  );
}

export default App;


