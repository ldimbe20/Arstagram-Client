
import { Link } from "react-router-dom"



export const Resource = () => {
	
	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>  
			<div className='container'>
				<div className='column'>
					<div className='title'>Resources</div>

                    <Link
						className='button is-link is-dark'
						to={`/watercolors`}>
						Watercolors
					</Link>
												
                   

                   


				</div>
			</div>
		</>
	)
}
