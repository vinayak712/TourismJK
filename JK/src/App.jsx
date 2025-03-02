import Navbar from "./navbar"
import Place from "./PlacetoVisit"
import Advanture from "./advanture"
import Hero from "./Hero"
import Historical from "./Historical"
import About from "./about"
import Cuisines from "./Cuisines"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Rajma from "./pages/rajma"
import Kaladi from "./pages/kaladi"
import Wazan from "./pages/wazan"
import Dumalo from "./pages/dumalo"
import Pitsa from "./pages/pitsa"
import Religion from "./religion"
import Rpage1 from "./pages/religionPage_1"
import Rpage2 from "./pages/religionPage_"
import Rpage3 from "./pages/religionPage_2"
function App() {
  return (
    <>
      
   
      <Router>
          <Navbar />
       
      
      
     
        <Routes>
          <Route path="/" element={<>    <Hero/> <Place />  <Cuisines/></>}></Route>
          <Route path="/advanture" element={<Advanture />}></Route>
          <Route path='/culture' element={<Historical />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/rajma" element={<Rajma />}></Route>
          <Route path="/kladi" element={<Kaladi />}></Route>
          <Route path="/wazan" element={  <Wazan />}></Route>
          <Route path="/patisa" element= {<Pitsa/> }></Route>
          <Route path="/dumalo" element={<Dumalo />}></Route>
          <Route path="/rpage1" element={<Rpage1 />}></Route>
          <Route path="/rpage2" element={<Rpage2 />}></Route>
          <Route path="/rpage3" element={<Rpage3 />}></Route>
          <Route path="/religion" element={   <Religion />}></Route>
        </Routes>
      </Router>
   

    </>
  );
}

export default App
