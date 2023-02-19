import React from 'react'   
import floo  from "../assets/floo.jpg"   
import were from "../assets/were.jpg"      
import turudishule from "../assets/turudishule.jpg"

const Projects = () => {
  return (
		<div>
			{/* CAROUSEL*/}

			<section class="pt-20 px-14 lg:pt-[120px] pb-10 lg:pb-20">
				<div class="container">
					<div class="flex flex-wrap justify-center -mx-4">
						<div class="w-full px-4">
							<div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
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
					<div class="flex flex-wrap -mx-4">
						<div class="w-full md:w-1/2 lg:w-1/3 px-4">
							<div class="max-w-[370px] mx-auto mb-10">
								<div class="rounded overflow-hidden mb-8">
									<img src={floo} alt="Sanitary Pad Drive " class="w-full" />
								</div>
								<div>
									<span
										class="
                     bg-gray-900
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
										Aug 22, 2022
									</span>
									<h3
										className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
										Sanitary Donation Drive, Seka DOK Primary School
									</h3>
									<p class="text-base text-body-color">
										After learning through a friend,a female teacher at Seka DOK
										Primary who wrote to us about the dire need of Sanitary
										hygiene amongst girls in upper primary.She went ahead to
										explain what this menace has resulted into cases such as Sex
										For Pads,a situation where girls are being lured by
										Fishermen and Motor Bikes operators to have sex with in
										exchange of their needs.We called on our partners who
										responded positively.We managed to distribute 76 boxes of
										sanitary towels.Over 200 girls were beneficiary of these
										programmme.This drive will see them go for 3 months without
										worrying about buying sanitary towels which has been a
										challenge due the tough financial backgrounds where majority
										hail from.
									</p>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 lg:w-1/3 px-4">
							<div class="max-w-[370px] mx-auto mb-10">
								<div class="rounded overflow-hidden mb-8">
									<img
										src={were}
										alt="Book Donation Drive"
										class="w-full"
									/>
								</div>
								<div>
									<span
										class="
                     bg-gray-900
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
										April 15, 2022
									</span>
									<h3
										className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">   
                        Book Donation Drive,Kamser Primary School
									</h3>
									<p class="text-base text-body-color">
										According  to the HeadTeacher Kamser Primary School,the leading cause of poor perfomance in the schools especially girls is the inadequate reading and revision materials.We remain truly grateful to the Miss Tourism Homabay County 2022 Beth Odek and Kenya Literature Bureau who generously supported us in this  drive.We were able to donate over 100 course books for different subjects from languages to  sciences.In addition,to curb the challenge  of reading and writting skills,we were able to donate over 60 story books which go along a way to enhancing storytelling skills of pupils.We were exicted to get a letter from the HeadTeacher earlier this year informing us of the skyrocket National exams results compared to previous years.He attributed this great results to our efforts last year.
									</p>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 lg:w-1/3 px-4">
							<div class="max-w-[370px] mx-auto mb-10">
								<div class="rounded overflow-hidden mb-8">
									<img
										src={turudishule}  
										alt="Community Advocacy"
										className="w-full h-60 object-cover"
									/>
								</div>
								<div>
									<span
										class="
                     bg-gray-900
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
										Sep 05, 2021
									</span>
									<h3
										className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">

											Turudi Shule,Apida Market Centre.
									</h3>
									<p class="text-base text-body-color">
										According to Kenya National Bureau of Statistics report 2019,33 percent of girls in Homabay drop out of School every year.This has been attributed to early marriages.This shocking statistics gave birth to one of our initiatives dubbed Turudi Shule.Turudi Shule is a swahili word to mean "Let's go back to  school".Through this initiative, we visit market centers along beaches which have been hard hit by this disaster.We talk with young girls who have been victims of these circumstances.We then talk  with them on the benefits of education and support those who agree emotionally and materially.Through this advocacy, we have brought more than 20 girls back to school.Some have proceeded to the unviersity and thus lives changed. 
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>   
		</div>
	)
}

export default Projects