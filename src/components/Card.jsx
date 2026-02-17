import "./Card.css"
import { Link } from "react-router"
export default function Card({image,title,techStack,liveDemoLink,GithubLink}){

    return (

        <div id="card">
            <div className="cardImage">
                <img src={image} alt="image" />
            </div>

        <div className="cardInfo">

            <h1>{title}</h1>  

            <div className="TechStack">
                {techStack.map((item) =>
                 <li>{item}</li>
            )}
                
            </div>

            <div className="cardBtns">
                <Link className="cardBtn" to={liveDemoLink}>Live Demo</Link>
                <Link className="cardBtn" to={GithubLink}>Git Hub</Link>
                
            </div>

        </div>
        </div>
    )

}