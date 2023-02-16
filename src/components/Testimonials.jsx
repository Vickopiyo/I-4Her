import React from 'react' 
import were from "../assets/were.jpg"  
import velma from "../assets/padsss.jpg"
import okeyo from "../assets/freelawcamp.jpg"

const Testimonials = () => {
  return (          
<div class="py-16 white">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">Testimonials</h2>
        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div class="h-full flex flex-col justify-center space-y-4">
              <img className="w-40 h-40  object-cover  mx-auto rounded-full" src={were} alt="user avatar" height="320" width="320" loading="lazy"/>
              <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> I will be forever grateful to initiative For Her for the immense uplift of our School Library  through Book donation drive on 23<sup>rd</sup> August 2021.Nicole and team are very passionate about girlchild empowerment and thus I highly endorse this organizaton.Keep it up ! <span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Tobias Were</h6>
                  <span class="text-xs text-gray-500">HeadTeacher Kamser Primary School.</span>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-40  object-cover h-40 mx-auto rounded-full" src={velma} alt="user avatar" height="220" width="220" loading="lazy"/>
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> After Scoring 354 Marks in my KCPE and hope of joining my dream high school was on a balance,I reached out to Nicole who lobbied her friends and enrolled me to school.They fully sponsor my education and I can"t find enough words to express how grateful I am.Thanks Nicole<span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Velma Achieng</h6>
                  <span class="text-xs text-gray-500">Scholarship Beneficiary</span>
              </div>
            </div>
          </div>
          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-40 h-40  object-cover mx-auto rounded-full" src={okeyo} alt="user avatar" height="220" width="220" loading="lazy"/>
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span> On matters of partnership towards presevering environment through tree planting and advocacy, I have never found  a passionate and hands on partner like Initiatvie For Her.I highly recommend Nicole and team in any partnership engagements.<span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Bruno Menezes</h6>
                  <span class="text-xs text-gray-500">CEO - Green Movement</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>

  )
}

export default Testimonials