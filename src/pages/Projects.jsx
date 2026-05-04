import "./Project.css"
import Card from "../components/Card";
import { Doubt, Threads } from "../assets/index";



export default function Projects(){
    let techStack = ["HTML","CSS","JS","React","Express","MongoDB"]
    let threadsTechStack = ["HTML","CSS","Bootstrap",,"JS","React","Express","MongoDB","Socket.IO","Bcrypt","JWT",]
    
    
    return (<>

        <h1 className="Project-heading">Projects</h1>
                <div className="Project-container">
        
        
                    <Card title={"Doubt Portal"} image={Doubt} techStack={techStack} liveDemoLink={"http://doubt-portal.jnitesh054.workers.dev/"} GithubLink={"https://github.com/niteshjangir63/Student-Doubt-Portal-Backend.git"}/>
                    <Card title={"Threads"} image={Threads} techStack={threadsTechStack} liveDemoLink={"https://threadsweb-psi.vercel.app/"} GithubLink={"https://github.com/niteshjangir63/Threads-Clone"}/>
                   
                </div>
    
    </>)
}