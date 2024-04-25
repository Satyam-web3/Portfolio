import React from "react";
import '../App.css'

function Card(props){
    return(
        <>
            
            
                <div className="card">
                    <div className="icon">{props.icon}</div>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <div className="overlay">
                        <div className="images">
                            <img src={props.image}/>
                        </div>
                    </div>
                </div>

            
        </>
    )
}
export default Card