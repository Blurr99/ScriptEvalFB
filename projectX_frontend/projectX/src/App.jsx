import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./componetnts/Navbar";
import Home from "./pages/Home";
import Evaluate from "./pages/Evaluate";
import Results from "./pages/Results";
import Exam from "./pages/evalutepages/Exam";
import Question from "./pages/evalutepages/Question";
import Script from "./pages/evalutepages/Script";
import MultipleQ from "./pages/evalutepages/MultipleQ";
import MultipleNav from "./componetnts/MultipleNav";
import SideAnimation from "./componetnts/SideAnimation";


const App = () => {
  return (
    <main className='h-[100vh]'>
      <Router>
      < Navbar />
        <Routes>   
          <Route path="/" element={<Home />} />

          <Route path="/evaluate" element={<Evaluate />} />
                                   
          <Route path="/multipleq" element={<>
            <MultipleQ />
            <MultipleNav />
            </>} >
                  <Route path="script" element={<Script />} />
                  <Route path="exam" element={<Exam />} />
          </Route>
          <Route path="/question" element={<Question />} />
          <Route path="/results" element={<Results />} /> 
          <Route path="/side" element={<SideAnimation />} /> 
        </Routes>
      </Router>
      
    </main>
  )
}

export default App;
