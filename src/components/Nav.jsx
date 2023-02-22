import React,{useState} from "react"
      
import logo from "../assets/logo.jpg"   
import { Link } from "react-router-dom"

const Nav = () => {      
	

	let [open, setOpen] = useState(false)    

	return (
		<div className="sticky top-0 z-50  bg-blue-600  text-white">
			<div className="shadow-md w-full bg-blue-400  fixed top-0 left-0  ">
				<div className="md:flex justify-between items-center py-6  md:px-10  px-6">
					<div className="flex cursor-pointer  justify-between items-center">
						<div className="flex cursor-pointer items-center">
							<span className="bg-blue-400 text-white"></span>
							<h1 className="font-bold   text-3xl mx-2">I4Her</h1>
						</div>
					</div>
					<div
						onClick={() => setOpen(!open)}
						className="absolute right-8 top-6 cursor-pointer">
						<div className="text-white md:hidden">
							{open ? (
								<svg
									className="h-6 w-6 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512">
									<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
								</svg>
							) : (
								<svg
									className="h-6 w-6 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512">
									<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
								</svg>
							)}
						</div>
					</div>

					<ul
						className={`md:flex  md:items-center md:pb-0  pb-12  absolute md:static bg-blue-400   md:z-auto z-[-1] left-0  w-full    md:w-auto   md:pl-0   pl-8  transition-all  duration-300  ease-in  ${
							open ? "top-20 " : "top-[-690px]  duration-600"
						}  md:opacity-100 `}>
						<li className="md:ml-18 md:text-xl  md:my-0  my-7 hover:duration-300  cursor-pointer">
							<Link to="/">Home</Link>
						</li>
						<li className="md:ml-8  md:text-xl md:my-0  my-7   hover:duration-300   cursor-pointer">
							<Link to="/about">About Us</Link>
						</li>
						<li className="md:ml-8   md:text-xl  md:my-0  my-7  hover:duration-300   cursor-pointer">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="md:ml-8    md:my-0  my-7  hover:duration-300   cursor-pointer">
							<Link to="/donate">
								<button className="bg-blue-900  rounded text-gray-50   py-3 px-6  md:ml-6  ml-0  hover:text-gray-400 duration-700">
									Donate
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
                   
export default Nav
