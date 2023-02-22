import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./About"
import Home from "./Home"
import Donate from "./components/Donate"

function App() {
	return (
		<div className=" font-sans scroll-smooth"> 

			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/donate" element={<Donate />} />
			</Routes>    
			<Footer />     
		</div>
	)
}

export default App
