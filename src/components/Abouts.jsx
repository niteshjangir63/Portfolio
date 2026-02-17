import "./Abouts.css"
import profile from "../assets/profile.jpg"
export default function Abouts() {

    return (
        <>
            <section id="about">
                <h1 className="aboutPageHeading">About</h1>
                <div id="aboutInnerDiv">
                    <div className="aboutPageImage">
                        <img src={profile} alt="About me" />
                    </div>

                    <div className="aboutPageText">
                        <p>
                            I’m a passionate MERN stack developer and a computer science student who enjoys building modern, responsive web applications. I’m currently focused on improving my frontend skills with React and exploring backend development with Node.js and MongoDB.

I’m always eager to learn, grow, and work on real-world projects.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}