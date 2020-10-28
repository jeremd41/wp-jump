import { Link } from "gatsby"
import React, { Component } from "react"

import Logo from "../images/logo.png"

import "../styles/header.scss"

class Header extends Component {

  render() {    
    return (
      <div>
        <header className="header">
            <Link to="/" className="logo">
                <img src={Logo} alt="logo Wp Jump" />Wp Jump
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="navicon" />
            </label>
            <ul className="menu">
                <li>
                    <Link className="item-nav" to="/whitelabel/"> Marque blanche</Link>
                </li>
                <li>
                    <Link className="item-nav" to="/tarif/"> Tarifs</Link>
                </li>
                <li>
                    <Link className="btn-grey" to="/bookacall/"> <i className="fas fa-comment"></i> Réserver un appel</Link>
                </li>
            </ul>
        </header>
      </div>
    )
  }
}

export default Header