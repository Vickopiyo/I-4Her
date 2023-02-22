import React from "react"
import ceo from "./assets/founder.jpg"
import Testimonials from "./components/Testimonials"
import vick from "./assets/vick.jpg"
import retty from "./assets/retty.jpg"
import sophy from "./assets/sophy.jpg"
import shee from "./assets/sheryll.jpg"

const About = () => {
	return (
		<div className="lg:pt-[120px]  pt-20">
			<div class="py-16  pt-20 bg-white">
				{/* <div className="mx-4">
					<div class="text-center bg-blue-400  px-20 py-10  text-white mx-auto w-full rounded  mb-[60px] lg:mb-20 max-w-[810px]">
						<span class="font-semibold text-lg text-primary mb-2 block"></span>
						<h2
							class="
                  font-bold
                  text-3xl          
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
							Our Mission
						</h2>
						<p class="text-base text-body-color   text-center leading-relaxed">
							InitiativeForHer is a grassroot movement which seeks to provide a
							better environment for girlchild to thrive in education and
							society in the rural areas of Kenya.
						</p>
					</div>
				</div> */}

				<div className=" mx-8 rounded  px-4 ">
					<div class="flex flex-wrap  mb-10 rounded  px-4 py-6 bg-blue-400 justify-center  items-center -mx-4">
						<div class="w-full px-4">
							<div class="text-center   text-white mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
								<span class="font-semibold text-lg text-primary mb-2 block"></span>
								<h2
									class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
				  pt-4
                  mb-4
                  ">
									Our Recent Projects
								</h2>
								<p class="text-base text-body-color">
									Through the support of our sponsors and partners,we have been
									able impact lives to the best we can.Read about some of our
									activities.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="container  m-auto px-6 text-gray-600 md:px-12 xl:px-16">
					<div class="space-y-6 md:space-y-0 md:flex md:gap-6  lg:gap-8">
						<div class="md:5/12 lg:w-7/12">
							<img
								src={ceo}
								className="rounded"
								alt="image"
								loading="lazy"
								width=""
								height=""
							/>
						</div>
						<div class="  md:12/12 lg:w-12/12">
							<h2 class="text-2xl pt-4 text-gray-900 font-bold md:text-4xl">
								Beverly Nicole - Founder
							</h2>
							<p class="mt-6 text-gray-600   text-justify sm:text-justify">
								Growing up at the shores of lake Victoria,I witnessed a high
								rate of school dropout among girls.The leading cause was extreme
								poverty which led some of these girls to early marriages.Many a
								times, I witnessed girls being stigmatized during their monthly
								periods.This heartbroke me so many times seeing some of the
								girls perfomance going down or even getting sexually involved
								with fishermen and motorbike operators for exchange of basic
								needs such as clothes and sanitary towels.I felt challenged by
								these occurences and thus founding InitiativeForHer which helps
								to seek the root causes and address such shortcomings in our
								society.
							</p>
						</div>
					</div>
				</div>
			</div>

			<h1 className="text-2xl  text-center   text-gray-900 font-bold md:text-4xl">
				Meet Our dedicated Team
			</h1>

			<div className="px-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
					<div>
						<img
							className="object-cover w-24 h-24 rounded-full shadow"
							src={shee}
							alt="Sheryl Simba"
						/>
						<div className="flex flex-col justify-center mt-2">
							<p className="text-lg font-bold">Sheryl Simba</p>
							<p className="mb-4 text-xs text-gray-800">Programs Officer</p>
							<p className="text-sm tracking-wide text-gray-800">
								Sheryl is a pasionate and dedicated about girlchild
								Empowerment.She organizes and coordinates our programmes and
								activities.
							</p>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-24 h-24 rounded-full shadow"
							src={retty}
							alt="Gorety Gogo"
						/>
						<div className="flex flex-col justify-center mt-2">
							<p className="text-lg font-bold">Gorety Gogo</p>
							<p className="mb-4 text-xs text-gray-800">Secretary</p>
							<p className="text-sm tracking-wide text-gray-800">
								Gorety is an accomplished adminstrator who handles documentation
								of the organization.Highly supportive and priviledged to have
								her in our organization.
							</p>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-24 h-24 rounded-full shadow"
							src={sophy}
							alt="Sophy Otieno"
						/>
						<div className="flex flex-col justify-center mt-2">
							<p className="text-lg font-bold">Sophy Otieno</p>
							<p className="mb-4 text-xs text-gray-800">Finance Director </p>
							<p className="text-sm tracking-wide text-gray-800">
								Sophy is an experienced accountant with over four years of
								experience.She is incharge of the financial operations in our
								organization.
							</p>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-24 h-24 rounded-full shadow"
							src={vick}
							alt="Victor Opiyo"
						/>
						<div className="flex flex-col justify-center mt-2">
							<p className="text-lg font-bold">Victor Opiyo</p>
							<p className="mb-4 text-xs text-gray-800">Tech Educator</p>
							<p className="text-sm tracking-wide text-gray-800">
								Victor has wealth of experience and knowledge on matters
								technology.He is the lead in our digital literacy programmes
								which involves computer and basic coding lessons.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Testimonials />
		</div>
	)
}

export default About
