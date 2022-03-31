
import { Link } from "react-router-dom"
import React from 'react'






export const Resource = () => {
	
	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>  
			<div className='container'>
				<div className='column'>
				<h1 className="main-title">Resources</h1>
				<p className='title is-5 mt-3 mb-1'>Click button to be directed to resources by each art material. Resources include videos, articles, and tips and trips by professionals that use each art material. </p>
                   <div className='column $column-gap'>
                    <Link
						className='button is-primary mr-4 mt-4'
						to={`/watercolor`}>
						Watercolors
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/acrylic`}>
						Acrylics
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/gauche`}>
						Gauche
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/ink`}>
						Ink and Pen
					</Link>


					<Link
						className='button is-primary mr-4 mt-4'
						to={`/ink`}>
						Tempura
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/charcoal`}>
						Charcoal
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/ink`}>
						Pastels
					</Link>
				

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/ink`}>
						Graphite Pencils
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/ink`}>
						Color Pencil
					</Link>

					<Link
						className='button is-primary mr-4 mt-4'
						to={`/ink`}>
						Pastels
					</Link>





					</div>
			       

				</div>
			</div>
		</>
	)
}
