import { FaBarsStaggered,FaHouseMedical} from "react-icons/fa6";

import { IoIosClose } from "react-icons/io";

import { useState } from "react"
import "./Nav.css"
import { VscDebugAll } from "react-icons/vsc";
import { Link } from "react-router"
export default function Nav() {

    const [open,setOpen] = useState(false);
    function handleNav(){

        
            setOpen(!!!open);
       

    }
    return (

        <>

            <nav id="nav" >
                <Link id="logo" className="navAnimation" to="/"> OurHub <VscDebugAll/></Link>
               
                <div id="links">

                    
                    <Link className={`link navAnimation`} to="/">Home</Link>
                    {/* <Link className={`link navAnimation`} to="#aboutSection">About</Link> */}
                    
                    <Link className={`link navAnimation`} to="/contact">Contact</Link>
                    <Link className={`link navAnimation`} to="/skills">Skills</Link>
                    <Link className={`link navAnimation`} to="/projects">Projects</Link>


                </div>

                 {open ? <IoIosClose onClick={handleNav} className="menuBtn closeBtn"></IoIosClose> : <FaBarsStaggered onClick={handleNav} class="menuBtn"></FaBarsStaggered>}

                
            </nav>

            <div id="sidebar" style={{height: open ? "250px" : "0px"}}>

                    <Link onClick={handleNav} className={`sidebarlink ${open ? "navAnimation" : ""}`} to="/">Home</Link>
                    <Link onClick={handleNav} className={`sidebarlink ${open ? "navAnimation" : ""}`} to="/contact">Contact</Link>
                    <Link onClick={handleNav} className={`sidebarlink ${open ? "navAnimation" : ""}`} to="/skills">Skills</Link>
                    <Link onClick={handleNav} className={`sidebarlink ${open ? "navAnimation" : ""}`} to="/projects">Projects</Link>
                </div>

        </>
    )
}