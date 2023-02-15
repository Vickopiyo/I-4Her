import React from "react"

import logo from "../assets/logo.jpg"   

import { Link } from "react-router-dom"

const Nav = () => {    
	return (
		<header className="w-full h-24 bg-gray-900  sticky  top-0 z-50 ">        
			<div className="flex  justify-between  w-full">
				<img src={logo} alt="logo" className="w-24 h-24 object-cover" />
				<nav  className=" w-[90%]  flex place-content-center">
					<ul className="flex items-center text-white md:text-2xl">  

						<li className="mx-4  cursor-pointer  md:mx-5">

                            <Link to="/">Home</Link>
                        </li>
						<li  className="mx-2 cursor-pointer  md:mx-5">

                            <Link  to="/about">About Us</Link>
                        </li>
						<li  className="mx-2 cursor-pointer  md:mx-5">
                        <Link  to="/projects">Projects</Link> 
                        </li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
                   
export default Nav
