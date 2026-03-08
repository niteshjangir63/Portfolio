import "./Project.css"
import Card from "../components/Card";
import { Doubt } from "../assets/index";



export default function Projects(){
    let techStack = ["HTML","CSS","JS","React","Express","MongoDB"]
    
    
    return (<>

        <h1 className="Project-heading">Projects</h1>
                <div className="Project-container">
        
        
                    <Card title={"Doubt Portal"} image={Doubt} techStack={techStack} liveDemoLink={"http://doubt-portal.jnitesh054.workers.dev/"} GithubLink={"https://github.com/niteshjangir63/Student-Doubt-Portal-Backend.git"}/>
                   
                </div>
    
    </>)
}