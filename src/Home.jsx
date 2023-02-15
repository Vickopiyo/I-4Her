import React from 'react'
import heropic from "./assets/floo.jpg"
import Footer from './components/Footer'
import Nav from './components/Nav'

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
							{/* <h1>Protected girl for a better tommorrow</h1>    */}
							<h2 className="font-bold  text-3xl  md:text-5xl  m-4">
								Saving the future of young girls in kenya
							</h2>
						</div>
					</div>
				</div>
			</div>

			<p className="text-base  text-justify bg-gray-900 text-gray-300 px-10 py-12 leading-normal">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
				quisquam amet vel earum, eos aperiam nesciunt laudantium, illum soluta
				b=gardelectus accusantium, quaerat praesentium? Sapiente eaque ipsum,
				ipsam animi eligendi neque ex autem recusandae hic, ipsa harum cum,
				voluptate molestias quasi deleniti iure quisquam? Quos, aliquam nulla
				tenetur voluptates eaque aut nemo cum nostrum exercitationem eveniet
				autem dolorem laborum vel cumque pariatur id doloribus harum quo facilis
				voluptatem vitae saepe! Non ratione deleniti molestias facilis dolore
				exercitationem quidem tempora incidunt, similique placeat, repellendus
				eaque temporibus corrupti repellat praesentium sint saepe ducimus
				voluptate perferendis amet adipisci nihil? Vel rem voluptates omnis!
				Fuga?
			</p>  
		</div>
	)
}

export default Home