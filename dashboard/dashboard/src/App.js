
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Doctors from './Pages/Doctors';
import AddDoctors from './Pages/AddDoctors';
import Messages from './Pages/Messages';
import AddAdmins from './Pages/AddAdmins';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        

        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/doctors' element = {<Doctors/>}/>
         <Route path='/addadmins' element = {<AddAdmins/>}/>
        <Route path= '/adddoctors' element={<AddDoctors/>}/>
        <Route path = 'messages' element = {<Messages/>}/>


      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
