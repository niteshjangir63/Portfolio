import { Link } from "react-router"
import "./Footer.css"
export default function Footer(){

    return(

        <footer class="footer">
  <p>© 2026 Nitesh. All rights reserved.</p>

  <div class="footer-links">
    <a href="https://github.com/niteshjangir63" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/nitesh-jangir-684b2325b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
    
    <Link to={"/contact"}>Contact</Link>
  </div>
</footer>

    )
}