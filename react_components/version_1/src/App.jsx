import './App.css'
import NavBar from './components/navbar/NavBar'
import SideBar from './components/sidebar/SideBar';
import Home from './Home';
import Form from './components/form/Form';
import { Route, Routes } from "react-router-dom"; 

function App() {

  return (
    <>
    <NavBar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sidebar" element={<SideBar/>} />
        <Route path="/form" element={<Form/>} />
     </Routes>
    </>
  )
}

export default App



{/* <Route path="/" element={</>} /> */}
