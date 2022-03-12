import './App.css';
import Reg from './user/register';
import Log from './user/login';
import ContactView from './user/viewcontacts';
import Contact from './user/contact';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Reg />}></Route>
          <Route path="/login" element={<Log />}> </Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/viewcontacts" element={<ContactView />}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
