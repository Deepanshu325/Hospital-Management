
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import Appointment from './Pages/Appointment';
import Aboutus from './Pages/Aboutus';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">

       <Header/>


      
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
