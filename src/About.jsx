import React from 'react'   
import ceo from './assets/founder.jpg'
import Testimonials from './components/Testimonials' 
import vick from "./assets/vick.jpg"       
import retty from "./assets/retty.jpg" 
import sophy from "./assets/sophy.jpg"
import shee from "./assets/sheryll.jpg"

const About = () => {
  return (
		<div>
			<div class="py-16 bg-white">
				<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
					<div>
						<h1 className="text-2xl  text-center mb-10  text-gray-900 font-bold md:text-4xl">
							Our Mission
						</h1>
					</div>
					<div class="space-y-6 md:space-y-0 md:flex md:gap-6  lg:gap-12">
						<div class="md:5/12 lg:w-5/12">
							<img src={ceo} alt="image" loading="lazy" width="" height="" />
						</div>
						<div class="md:12/12 lg:w-12/12">
							<h2 class="text-2xl  pt-4 text-gray-900 font-bold md:text-4xl">
								Beverly Nicole - Founder
							</h2>
							<p class="mt-6 text-gray-600">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
								omnis voluptatem accusantium nemo perspiciatis delectus atque
								autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
								consequatur! Officiis id consequatur atque doloremque!
							</p>
							<p class="mt-4 text-gray-600">
								Nobis minus voluptatibus pariatur dignissimos libero quaerat
								iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
								aspernatur quam mollitia.
							</p>
						</div>
					</div>
				</div>
			</div>

			<h1 className="text-2xl  text-center mb-6  text-gray-900 font-bold md:text-4xl">
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
								of the organization.Highly supportive and Priviledged to have
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