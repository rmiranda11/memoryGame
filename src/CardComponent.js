import React from "react"

function CardComponent(props){

        return(
            
            <div className="shadow-box">
                <div className="d-flex">
                    <img 
                    className="flip" 
                    onClick={() => props.handleClick(props.item)}  
                    key={props.item.key} 
                    value={props.animal} 
                    src={props.imgLink} 
                    alt="dog" 
                    border="0"
                    style={props.style} 
                    />

                </div>
            </div>
        )
}

export default CardComponent
//onClick={() => props.handleClick(props.item.key)}