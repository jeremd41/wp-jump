import React from "react"
import { InlineWidget } from "react-calendly"
import Header from "../components/header"

import "../styles/bookacall.scss"


const Bookacall = ()=>{
    return(
        <div className="book">
            <Header />
            <InlineWidget
             url="https://calendly.com/wpjump/15min"
             styles = {{
                height: 1000,
                backgroundColor: "#BF033B",
                marginTop: 50,
                boxShadow: '2px 2px 4px rgba(0,0,0,0.4)'
              }}
            />
        </div>
    )
}

export default Bookacall