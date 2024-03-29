import React from 'react'
import '../../assets/styles/navbar.css'
// import logo from '../../assets/images/main_logo.png'
import { Link } from 'react-scroll';
// import contactImg from '../../assets/images/contact.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* <img src={logo} alt="logo" className="logo"/> */}
        <img src="https://placehold.co/150x150" alt="logo" className="logo"/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src="https://placehold.co/300x150" alt="contact me" className="desktopMenuImg"/> Contact Me
        </button>
    </nav>
  )
}

export default Navbar