
import React from 'react'
import ReactPlayer from 'react-player/youtube'


export const Acrylic = () => {
	
	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>  
			<div className='container'>
				<div className='columns'>
					<div className='column is-full'>
						<h1 className="main-title">Acrylics</h1>
						<h1 className='title is-3 mb-2 mt-5'>Intro to Acrylics</h1>
						<p className='subtitle is-5 mt-2'>Acrylic (American English) or watercolour (British English; see spelling differences), also aquarelle (French: [akaʁɛl]; from Italian diminutive of Latin aqua "water"),[1] is a painting method in which the paints are made of pigments suspended in a water-based solution. Acrylic refers to both the medium and the resulting artwork. Aquarelles painted with water-soluble colored ink instead of modern water colors are called aquarellum atramento (Latin for "aquarelle made with ink") by experts. However, this term has now tended to pass out of use.[2][3]

						The traditional and most common support—material to which the paint is applied—for acrylic paintings is acrylic paper. Other supports include papyrus, bark papers, plastics, vellum, leather, fabric, wood, and acrylic canvas (coated with a gesso that is specially formulated for use with watercolours). Acrylic paper is often made entirely or partially with cotton.[4] This gives the surface the appropriate texture and minimizes distortion when wet.[5] Acrylic papers are usually cold pressed papers, and gives better texture and appearance with a GSM weight between 200 and 300. Acrylics are usually translucent, and appear luminous because the pigments are laid down in a pure form with few fillers obscuring the pigment colors. Acrylics can also be made opaque by adding Chinese white.

						Watercolour paint is an ancient form of painting. In East Asia, acrylic painting with inks is referred to as brush painting or scroll painting. In Chinese, Korean and Japanese painting it has been the dominant medium, often in monochrome black or browns, often using inkstick or other pigments. India, Ethiopia and other countries have long acrylic painting traditions as well.

						American artists in the early 19th century seemed to regard acrylic primarily as a sketching tool in preparation for the "finished" work in oil or engraving.[6] </p>

						<div><h1 className='title is-3 mb-2 mt-5'>Tips and Tricks from the Masters</h1></div>

						<p className='subtitle is-5'>Pepe Silvia has been painting with acrylic for over 30 years and has his work displayed in many famous museums along with houses of celebrities.
							Oh man why are you actually reading this? There is no famous painter Pepe Silvia and this is just filler text on my capstone! I thought this would be more interesting than 
							Lorem ipsum dolor sit amet ect. Well hope you enjoy the videos below
						</p>

						<h1 className='title is-3 mb-2 mt-5'>Featured Videos</h1>
				    </div>	
			    </div>
            </div>
				<div className="container">
					<div className="columns">
					
					
						<div className='column is-half'>
											
											<h3 className='subtitle is-4 mt-2 mb-1'>Dry Brush Technique</h3>

											<ReactPlayer url='youtube.com/watch?v=9AFaI7t2nqM' />
						</div>

						<div className='column is-half'>
									

									<h3 className='subtitle is-4 mt-2 mb-1'>Inspired by Cats</h3>

									<ReactPlayer url='https://www.youtube.com/watch?v=VZrDxD0Za9I&list=PLu4wnki9NI_8VmJ7Qz_byhKwCquXcy6u9&index=2' />
					    </div>	
			         </div>

			    </div>
		
									
					

			

            
				
			
		</>
	)
}
