import { useState } from "react";
import Skill from "../components/Skill";
import {html,css,js,mongodb,mysql,nodejs,redux,react,ejs,express} from "../assets"
import "./Skills.css";
export default function Skills() {

    const [card,setCard] = useState([{name:"HMTL",image:html,progress:90,caption:"Semantic structure,forms,accessiblity"},
        {name:"CSS",image:css,progress:80,caption:"Flexbox, Grid, responsive layouts"},
        {name:"Javascript",image:js,progress:75,caption:"DOM manimulation, async APIs"},
        {name:"ReactJS",image:react,progress:75,caption:"Hooks, resusable comoponent, routing"},
        {name:"NodeJS",image:nodejs,progress:80,caption:"Server-side logic, REST APIs"},
        {name:"ExpressJS",image:express,progress:80,caption:"Routing, middleware, REST APIs development"},
        {name:"EJS(Embedded Javascript)",image:ejs,progress:70,caption:"Dynamic templates for server-rendered pages"},
        {name:"MongoDB",image:mongodb,progress:75,caption:"NoSQL database, schema models, CRUD operations"},
        {name:"MySQL",image:mysql,progress:70,caption:"Relational database ,joins, data queries"},
        {name:"Redux & Redux Toolkit",image:redux,progress:50,caption:"Global state management,async actions"}],
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