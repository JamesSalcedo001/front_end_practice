import './App.css'
import NavBar from './components/navbar/NavBar'
import SideBar from './components/sidebar/SideBar';
import Home from './Home';
import { Route, Routes } from "react-router-dom"; 

function App() {

  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sidebar" element={<SideBar/>} />
     </Routes>
    </>
  )
}

export default App



{/* <Route path="/" element={</>} /> */}
