import React from "react"

function CardComponent(props){

        return(
            
            <div className="shadow-box">
                <div className="d-flex col-sm-3">
                    <img className="flip" onClick={() => props.handleClick(props.item)}  key={props.item.key} value={props.animal} src={props.imgLink} alt="dog" border="0" />
                </div>
            </div>
        )
}

export default CardComponent
//onClick={() => props.handleClick(props.item.key)}