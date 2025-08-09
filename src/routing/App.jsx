import React  from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Navbar from './Navbar';
// import Users from "./Users";
import Profile from './Profile'
import Projects from './Projects'
import NotFound from './NotFound'


function App() {
    return (
        <div>
            <Router>
                <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/home" element={<Home/>}/> */}
                {/* <Route path="/users" element={<Users/>}/> */}
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/notfound" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App