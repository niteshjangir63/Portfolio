import "./Skill.css"
export default function Skill({data}) {

    return (
<>


{data.map((detail) => 



<div class="skill-card">
  <div class="card-inner">
    <div class="card-front">
        <div className="card-image">
            <h1>{detail.name}</h1>

                <img src={detail.image} alt="React" />

            </div>
            
            <div className="outer-bar">
            <div className="bar" style={{width:"100%"}}>
                <div className="progress"style={{width:`${detail.progress}%`}} >{detail.progress}%</div>
            </div>
            <p>Building reusable components, hooks, and routing with React Router.</p>
            </div>
    </div>

    <div class="card-back">
     
      <p>Hooks, Router, State Management</p>
    </div>
  </div>
</div>





)}
        

</>

    )
} 