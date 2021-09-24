import React from "react"
import Image from "./Img/library.JPG"

function Header() {
    return (
        <div className="logo">
            <img src={Image} alt="Library" className="logoImg"/>
            <h1 className="title">Album Libray</h1>
        </div>
    )
}

export default Header