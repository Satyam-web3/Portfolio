import React from "react";
import { Link } from "react-router-dom";



function Project(props){
    return(
        <>
            
                <div className="project-card">
                    
                    <div className="project-image">
                        <img src={props.p_image}/>
                    </div>
                    <div className="project-name">
                        <h3>{props.p_name}</h3>
                    </div>
                    <div className="project-desc">
                        <p>{props.p_desc}</p>
                    </div>
                    <div className="project-button">
                        <Link to={props.Link} target="blank"><button>Demo</button></Link>
                        <Link to={props.source} target="blank"><button className="source">Source</button></Link>
                    </div>
                </div>
            
        </>
    )
}
export default Project;