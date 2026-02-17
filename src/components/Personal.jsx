import profile from "../assets/profile.jpeg"
import "./Personal.css"
import {Resume} from "../assets/index"

export default function Personal() {


const downloadResume = () => {
  const link = document.createElement("a");
  link.href = Resume; 
  link.download = "Nitesh_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};





<button onClick={downloadResume}>Download Resume</button>


    return (

        <div id="Personal">

            <div className="info">

                <div id="title">
                    <h2>Hi i'm</h2>
                    <h1>Nitesh Jangir</h1>

                </div>
                <div id="fieldInfoTag">
                    <p>MERN Stack Developer</p>

                </div>

                <div className="about" >

                    <span> I’m a frontend-focused MERN developer who enjoys building clean, responsive, and interactive web experiences.</span>
                </div>


                <div className="btns">

                    <button>Hire Me!</button>
                    <button onClick={downloadResume}>Resume</button>
                </div>


            </div>

            <div className="image">
                <img src={profile} alt="" />
            </div>


        </div>
    )
}