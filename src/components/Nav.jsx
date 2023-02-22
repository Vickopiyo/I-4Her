import React,{useState} from "react"
      
import logo from "../assets/logo.jpg"   
import { Link } from "react-router-dom"

const Nav = () => {      
	

	let [open, setOpen] = useState(false)    

	return (
		<div className="sticky top-0 z-50 ">
			<div className="shadow-md w-full bg-blue-400  fixed top-0 left-0  ">
				<div className="md:flex justify-between items-center py-6  md:px-10  px-6">
					<div className="flex cursor-pointer  justify-between items-center">
						<div className="flex cursor-pointer items-center">
							<span className="bg-blue-400 text-white">
								<svg
									className="w-8 h-8  fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512">
									<path d="M176 304a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM352 176c0 89.1-66.2 162.7-152 174.4V400h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H200v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V448H104c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V350.4C66.2 338.7 0 265.1 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM328 318c10.9-11.7 20.5-24.6 28.5-38.6C377.7 294.9 403.8 304 432 304c70.7 0 128-57.3 128-128s-57.3-128-128-128c-28.2 0-54.3 9.1-75.5 24.6c-8-14-17.6-26.9-28.5-38.6C357.1 12.6 393.1 0 432 0c97.2 0 176 78.8 176 176c0 89.1-66.2 162.7-152 174.4V400h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H456v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V448H360c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V350.4c-29.7-4-57-15.5-80-32.4z" />
								</svg>
							</span>
							<h1 className="font-bold mx-2">I4Her</h1>
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
							open ? "top-20 " : "top-[-490px]  duration-600"
						}  md:opacity-100 `}>
						<li className="md:ml-18   md:my-0  my-7 hover:duration-300  cursor-pointer">
							<Link to="/">Home</Link>
						</li>
						<li className="md:ml-8   md:my-0  my-7   hover:duration-300   cursor-pointer">
							<Link to="/about">About Us</Link>
						</li>
						<li className="md:ml-8    md:my-0  my-7  hover:duration-300   cursor-pointer">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="md:ml-8    md:my-0  my-7   hover:duration-300  cursor-pointer">
							Services
						</li>
						<button className="bg-blue-600  rounded text-gray-200   py-3 px-5   md:ml-6  ml-0  hover:text-gray-400 duration-700">
							Get Started
						</button>
					</ul>
				</div>
			</div>

			{/* <header className="w-full h-24 bg-gray-900  sticky  top-0 z-50 ">
				<div className="flex  justify-between  w-full">
					<img src={logo} alt="logo" className="w-24 h-24 object-cover" />
					<nav className=" w-[90%]  flex place-content-center">
						<ul className="flex items-center text-white md:text-2xl">
							<li className="mx-4  cursor-pointer  md:mx-5">
								<Link to="/">Home</Link>
							</li>
							<li className="mx-2 cursor-pointer  md:mx-5">
								<Link to="/about">About Us</Link>
							</li>
							<li className="mx-2 cursor-pointer  md:mx-5">
								<Link to="/projects">Projects</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header> */}
		</div>
	)
}
                   
export default Nav
