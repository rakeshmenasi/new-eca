
import Navbar from "./Components/Navbar";
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import CoursesPage from "./Pages/CoursesPage";
import Mechanical from "./Components/Courses/Mechanical";

import Civil from "./Components/Courses/Civil";
import Electrical from "./Components/Courses/Electrical";
import StudentLogin from "./Pages/StudentLogin";
import FacultyLogin from "./Pages/FacultyLogin";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          

          <Route exact path="/coursedetails/mech" element={<Mechanical />} />
          <Route exact path="/coursedetails/civil" element={ <Civil /> } />
          <Route exact path="/coursedetails/electrical" element={ <Electrical  /> } />
          <Route exact path="/student-login" element={ <StudentLogin  /> } />
          <Route exact path="/faculty-login" element={ <FacultyLogin  /> } />
          {/* <Route exact path="/coursedetails/computer-science" element={ <Computer />} /> */}
          
          
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
