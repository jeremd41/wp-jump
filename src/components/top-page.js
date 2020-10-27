import React from "react"

const TopPages = (props)=>{
    return(
        <div className="top-page">
            <h1>{props.title}</h1>
            <h4>{props.sub}</h4>
        </div>
    )
}

export default TopPages