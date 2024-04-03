// import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from "react-router-dom"; 

function App() {

  return (
    <Routes>
      <div>
        <Route path="/" element={<NavBar/>} />
        <Route path="/sidebar" element={<SideBar/>} />
    </div>
    </Routes>
  )
}

export default App



{/* <Route path="/" element={</>} /> */}
