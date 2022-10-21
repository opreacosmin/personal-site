import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
      <>
          <Router>
              <>
                  <div className='app'>
                      <Routes>
                          <Route path='/' element={<Home/>} />
                          <Route path='/About' element={<About/>}/>
                          <Route path='/Work' element={<Work/>}/>
                          <Route path='/Contact' element={<Contact/>}/>
                          </Routes>
                  </div>
              </>

          </Router>
      </>

  );
}

export default App;
