
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import Appointment from './Pages/Appointment';
import Aboutus from './Pages/Aboutus';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">

       <Header/>

       <ToastContainer
position="top-center"
autoClose={4000}
limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

      
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
