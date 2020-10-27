import React, { Component } from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/base.scss"

class Layouti extends Component {

  render() {
    const {children} = this.props
    
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
  }
}

export default Layouti