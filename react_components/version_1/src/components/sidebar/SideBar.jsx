// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./SideBar.css";

// const SideBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSideBar = () => setIsOpen(!isOpen);

//     return (
//         <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//             <button className="toggle-button" onClick={toggleSideBar}>☰</button>
//             <ul className="sidebar-links">
//                 <li><Link to="/navbar" onClick={toggleSideBar}>NavBar</Link></li>
//                 <li><Link to="/sidebar" onClick={toggleSideBar}>SideBar</Link></li>
//                 <li><Link to="/search" onClick={toggleSideBar}>Search</Link></li>
//                 <li><Link to="/form" onClick={toggleSideBar}>Form</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default SideBar;


import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <>
            <button className="toggle-button" onClick={toggleSideBar}>☰</button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="sidebar-links">
                    <li><Link to="/navbar" onClick={toggleSideBar}>NavBar</Link></li>
                    <li><Link to="/sidebar" onClick={toggleSideBar}>SideBar</Link></li>
                    <li><Link to="/search" onClick={toggleSideBar}>Search</Link></li>
                    <li><Link to="/form" onClick={toggleSideBar}>Form</Link></li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;
