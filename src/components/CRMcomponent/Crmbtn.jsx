import React from "react";

const Crmbtn= ({year,clicked ,month}) =>{
    return(
        <button className="yearbtn" onClick={clicked}>{year}</button>
    )
}

export default Crmbtn