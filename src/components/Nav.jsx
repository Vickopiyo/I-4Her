import React from "react"

import logo from "../assets/logo.jpg"

const Nav = () => {    
	return (
		<header className="w-full h-24 bg-gray-900  sticky  top-0 z-50 ">        
			<div className="flex  justify-between  w-full">
				<img src={logo} alt="logo" className="w-24 h-24 object-cover" />
				<nav  className=" w-[80%]  flex place-content-center">
					<ul className="flex items-center text-white md:text-2xl">
						<li className="mx-4  cursor-pointer">Home</li>
						<li  className="mx-4 cursor-pointer">About Us</li>
						<li  className="mx-4  cursor-pointer">Our Projects</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Nav
