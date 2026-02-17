import { useState } from "react";
import Skill from "../components/Skill";
import {html,css,js,mongodb,mysql,nodejs,redux,react,ejs,express} from "../assets"
import "./Skills.css";
export default function Skills() {

    const [card,setCard] = useState([{name:"HMTL",image:html,progress:90,caption:"This is Caption"},
        {name:"CSS",image:css,progress:80,caption:"This is Caption"},
        {name:"Javascript",image:js,progress:75,caption:"This is Caption"},
        {name:"ReactJS",image:react,progress:75,caption:"This is Caption"},
        {name:"NodeJS",image:nodejs,progress:80,caption:"This is Caption"},
        {name:"ExpressJS",image:express,progress:80,caption:"This is Caption"},
        {name:"EJS(Embedded Javascript)",image:ejs,progress:70,caption:"This is Caption"},
        {name:"MongoDB",image:mongodb,progress:75,caption:"This is Caption"},
        {name:"MySQL",image:mysql,progress:70,caption:"This is Caption"},
        {name:"Redux & Redux Toolkit",image:redux,progress:50,caption:"This is Caption"}],
    )
    return (

        <>
        <h1 className="Skill-heading">Skills</h1>
        <div className="skill-container">


            <Skill data={card}/>

        </div>
        </>
    )
}