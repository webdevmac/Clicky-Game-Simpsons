import React from "react";
import "./style.css";
import "../Game/Game.js";


function FriendsCard(props) {
    return ( 
//    const FriendsCard = props => (
         <div className="card" >
            <div className="img-container" onClick={() => props.clickedImage(props.id)}>
                <img alt={props.name} src={props.image}/>
               
            </div>

        </div>
        
    );
}

export default FriendsCard;
