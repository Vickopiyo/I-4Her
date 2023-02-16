import React from 'react'   
import ceo from './assets/founder.jpg'
import Testimonials from './components/Testimonials'

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
		   <Testimonials />          
		</div>
	)
}

export default About