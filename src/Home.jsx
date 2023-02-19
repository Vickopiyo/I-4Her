import React from "react"
import heropic from "./assets/floo.jpg"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import gallery1 from "./assets/padsss.jpg"
import gallery2 from "./assets/pads.jpg"
import gallery3 from "./assets/morepads.jpg"
// import gallery4 from "./assets/beth.jpg"  
import  gallery5 from "./assets/paddonation.jpg"  
import gallery6 from "./assets/books.jpg"   
import gallery7 from "./assets/vitabu.jpg"
import gallery8 from "./assets/turudishule.jpg"         
import gallery9 from "./assets/sheryl.jpg"
const Home = () => {
	return (
		<div>
			<div className="w-screen h-screen">
				<div className="container-fluid">
					<img
						src={heropic}
						alt="hero"
						className="w-full h-[80vh]  brightness-50  object-cover"
					/>
					<div className="max-w-[1140px] m-auto ">
						<div className="absolute top-[50%]  text-white  w-[80%]  flex  justify-center p-4 ">
							<h2 className="font-bold  text-3xl  md:text-5xl  m-4">
								Saving the future of young girls in kenya
							</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-10 md:mb-4 ">
				<div
					id="services"
					class="section relative pt-10 pb-8 md:pt-10 md:pb-0 bg-white">
					<div class="container xl:max-w-6xl mx-auto px-4">
						<header class="text-center mx-auto mb-12 lg:px-20">
							<h2 class="text-3xl leading-normal mb-2 font-bold text-black">
								What We Do
							</h2>

							<p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
								We offer support &amp; empower young girls in rural areas for a
								brighter future.
							</p>
						</header>

						<div class="flex flex-wrap flex-row -mx-4 text-center">
							<div
								class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								// style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
							>
								<div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div class="inline-block text-gray-900 mb-4"></div>
									<h3 class="text-lg leading-normal mb-2 font-semibold text-black">
										Reproductive Health Education
									</h3>
									<p class="text-gray-500">
										We go around schools in remote parts of Kenya to create
										awareness and offer sexual reproductive education to young
										girls.
									</p>
								</div>
							</div>
							<div
								class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".1s"
								// style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;"
							>
								<div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div class="inline-block text-gray-900 mb-4"></div>
									<h3 class="text-lg leading-normal mb-2 font-semibold text-black">
										Girl Child Empowerment
									</h3>
									<p class="text-gray-500">
										Together with a team of successful female personalities, we
										visit both primary and secondary schools in rural Kenya to
										share their life journey and offer career Guidance
									</p>
								</div>
							</div>
							<div
								class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".3s"
								// style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;"
							>
								<div class="py-8 px-12 mb-16 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div class="inline-block text-gray-900 mb-4"></div>
									<h3 class="text-lg leading-normal mb-2 font-semibold text-black">
										Environmental Awareness
									</h3>
									<p class="text-gray-500">
										We are cognizant of importance of a preserving and improving
										our environment thus we are at the forefront of championing
										for environment awareness through our programs.
									</p>
								</div>
							</div>
							<div
								class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								// style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
							>
								<div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div class="inline-block text-gray-900 mb-4"></div>
									<h3 class="text-lg leading-normal mb-2 font-semibold text-black">
										Sanitary Towels Drives
									</h3>
									<p class="text-gray-500">
										Through our little way and support from our partners, we
										conduct regular donations of sanitary towels to school going
										girls.This boosts their confidence and self esteem while
										interacting with others.
									</p>
								</div>
							</div>
							<div
								class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".1s"
								// style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;"
							>
								<div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div class="inline-block text-gray-900 mb-4"></div>
									<h3 class="text-lg leading-normal mb-2 font-semibold text-black">
										Clothes Drives
									</h3>
									<p class="text-gray-500">
										Decent clothing is a basic human right.We therefore lobby
										for both used and new clothes from well wishers.We then
										distribute to the young and needy girls which really boosts
										their confidence and self esteem.
									</p>
								</div>
							</div>
							<div
								class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".3s"
								// style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;"
							>
								<div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div class="inline-block text-gray-900 mb-4"></div>
									<h3 class="text-lg leading-normal mb-2 font-semibold text-black">
										Digital Literacy Program
									</h3>
									<p class="text-gray-500">
										We offer scholarships on short courses such as computer
										packages and basic coding skills.This is our way of
										improving digital literacy and also influencing girls to get
										into STEM related courses.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* OUR PARTNERS  */}

			<h2 className="  text-gray-900 text-center text-4xl font-bold  mb-8">Our Partners </h2>   


     

	         {/* OUR GALLERY  */}
			<div class="flex items-center justify-center min-h-screen bg-white py-20">
				<div class="flex flex-col">
					<div class="flex flex-col mt-6">
						<div class="container max-w-7xl px-4">
							<div class="flex flex-wrap justify-center text-center mb-24">
								<div class="w-full lg:w-6/12 px-4">
									<h1 class="text-gray-900 text-4xl font-bold mb-8">
										Our Gallery
									</h1>

									<p class="text-gray-700 text-lg font-light">
										Enjoy some of our moments
									</p>
								</div>
							</div>

							<div class="flex flex-wrap">
								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery1}
											/>
										</a>
									</div>
								</div>

								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery2}
											/>
										</a>
									</div>
								</div>

								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery3}
											/>
										</a>
									</div>
								</div>

								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery7}
											/>
										</a>
									</div>
								</div>

								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												class="rounded-2xl object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery5}
											/>
										</a>
									</div>
								</div>

								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												className="rounded-2xl h-75 w-75  object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery6}
											/>
										</a>
									</div>
								</div>
								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												className="rounded-2xl object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery8}
											/>
										</a>
									</div>
								</div>

								<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div class="flex flex-col">
										<a href="#" class="mx-auto">
											<img
												className="rounded-2xl object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
												src={gallery9}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Our partners Section */}
		</div>
	)
}

export default Home
