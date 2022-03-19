
import React from 'react'




export const Charcoal = () => {

    let imgs = [
        'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
        'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
      ];
	
	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>  
			<div className='container'>
				<div className='columns'>
					<div className='column is-full'>
						<h1 className="main-title">Charcoals</h1>
						<h1 className='title is-3 mb-2 mt-5'>Intro to Pen and charcoals</h1>
						<p className='subtitle is-5 mt-2'>Pen and charcoal (American English) or charcoals (British English; see spelling differences), also aquarelle (French: [akaʁɛl]; from Italian diminutive of Latin aqua "water"),[1] is a painting method in which the paints are made of pigments suspended in a water-based solution. Pen and charcoal refers to both the medium and the resulting artwork. Aquarelles painted with water-soluble colored charcoal instead of modern water colors are called aquarellum atramento (Latin for "aquarelle made with charcoal") by experts. However, this term has now tended to pass out of use.[2][3]

						The traditional and most common support—material to which the paint is applied—for pen and charcoal paintings is pen and charcoal paper. Other supports include papyrus, bark papers, plastics, vellum, leather, fabric, wood, and pen and charcoal canvas (coated with a gesso that is specially formulated for use with charcoalss). Pen and charcoal paper is often made entirely or partially with cotton.[4] This gives the surface the appropriate texture and minimizes distortion when wet.[5] Pen and charcoal papers are usually cold pressed papers, and gives better texture and appearance with a GSM weight between 200 and 300. Pen and charcoals are usually translucent, and appear luminous because the pigments are laid down in a pure form with few fillers obscuring the pigment colors. Pen and charcoals can also be made opaque by adding Chinese white.

						Charcoals paint is an ancient form of painting. In East Asia, pen and charcoal painting with charcoals is referred to as brush painting or scroll painting. In Chinese, Korean and Japanese painting it has been the dominant medium, often in monochrome black or browns, often using charcoalstick or other pigments. India, Ethiopia and other countries have long pen and charcoal painting traditions as well.

						American artists in the early 19th century seemed to regard pen and charcoal primarily as a sketching tool in preparation for the "finished" work in oil or engraving.[6] </p>

						<div><h1 className='title is-3 mb-2 mt-5'>Tips and Tricks from the Masters</h1></div>

						<p className='subtitle is-5'>Pepe Silvia has been painting with acrylic for over 30 years and has his work displayed in many famous museums along with houses of celebrities.
							Oh man why are you actually reading this? There is no famous painter Pepe Silvia and this is just filler text on my capstone! I thought this would be more interesting than 
							Lorem ipsum dolor sit amet ect. Well hope you enjoy the videos below
						</p>

						<h1 className='title is-3 mb-2 mt-5'>Featured Pieces</h1>

                       
<div>
<img src={imgs[0]}/>
<img src={imgs[1]}/>
</div>
)
				    </div>	
			    </div>
            </div>
				<div className="container">
					<div className="columns">
					
				
					
			         </div>

			    </div>
		
									
					

			

            
				
			
		</>
	)
}
