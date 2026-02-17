import "./Project.css"
import Card from "../components/Card";
import { nodejs } from "../assets/index";

export default function Projects(){
    let techStack = ["HTML","CSS","JS","React","Express","MongoDB"]
    
    return (<>

        <h1 className="Project-heading">Projects</h1>
                <div className="Project-container">
        
        
                    <Card title={"Wanderlust"} image={nodejs} techStack={techStack} liveDemoLink={"https://www.google.com"} GithubLink={""}/>
                   
                </div>
    
    </>)
}