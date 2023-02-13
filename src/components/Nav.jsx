import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Nav = () => {
	let links = [
		{ name: "Home", link: "/" },
		{ name: "Projects", link: "/projects" },
		{ name: "Donate", link: "/donate" },
	]

	return (
		<div className="shadow-md w-full  fixed top-0  left-0">
			<div className="md:flex  justify-between  bg-sky-300 py-7  md:px-10 px-6">
				<h1 className="font-bold text-2xl cursor-pointer  flex  items-center  text-white-300">
					Initiative4Her
				</h1>

				<FontAwesomeIcon icon="fa-solid fa-bars" />   
                
				<ul className="md:flex md:items-center border-green-800  text-white">
					{links.map((link, index) => {
						return (
							<li key={index} className="md:ml-8 text-xl">
								<Link to={link.link}>{link.name}</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Nav
