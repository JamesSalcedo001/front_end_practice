import "./SideBar.css" 
import { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <div className="sidebar-div">Future Sidebar here</div>
    )
}

export default SideBar;