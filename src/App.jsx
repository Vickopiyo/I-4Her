import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./About"
import Home from "./Home"

function App() {
	return (
		<div className="   font-sans scroll-smooth">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>    
			<Footer />     
		</div>
	)
}

export default App
