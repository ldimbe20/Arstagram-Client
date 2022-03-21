import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import {getPosts, deletePost,} from "./PostManager"
import {getCurrentUser} from "../artists/ArtistManager"
import "./posts.css"

export const ShowPrivatePost = () => {
	const [currentUser, setCurrentUser] = useState([])
	const [posts, setPosts] = useState([])
	const history = useHistory()

	useEffect(() => {
		getPosts().then((data) => setPosts(data))
	}, [])

	useEffect(() => {
		getCurrentUser().then((data) => setCurrentUser(data))
	}, [])


	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>  
			<div className='container'>
				<div className='column'>
					<div className='main-title'>Private Posts</div>

					
					



				
						{posts.map((finishedPost) => {
						if (finishedPost.private === true) 
						if(finishedPost.user.user.id === currentUser.id)

							
                        {
								return (
									<div
										className='card equal-height has-text-centered'
										key={`finishedPost-${finishedPost.id}`}>
										<div className='card-content'>
											<div className='card-image has-text-centered'>
												<img 
													src={`http://localhost:8000${finishedPost.image_url}`}
													alt='Submitted Artwork'
													className='img image is-rounded is-horizontal-center'
												/>
											<p className='title is-5 mt-3 mb-1'>Title:{finishedPost.title}</p> 
                                            <p className='title is-5 mb-1'>Artist:{finishedPost.user.user.username}     
											&nbsp;&nbsp;&nbsp; Mood:{finishedPost.mood.mood_type}
											&nbsp;&nbsp;&nbsp;Material:{" "}
													{finishedPost.mediums_used
														?.map((m) => m.name)
														.join(", ")}
											</p>
                                            <p className='title is-5 mb-1'>Date:{finishedPost.publication_date} </p>
                                            <p className='title is-5'>Notes:{finishedPost.notes} </p>
											
										
											<div className='column'>
												{
												finishedPost.user.user.id === currentUser.id ?
												
												<Link
													className='button is-primary is-outlined mr-4'
													to={`/posts/${finishedPost.id}/update`}>
													Edit
											    </Link>: ""}
											  
												
												{
												finishedPost.user.user.id === currentUser.id ?
												<button
													className='button is-primary is-outlined mr-4'
													onClick={() => {
														deletePost(
															finishedPost.id
														).then(getPosts).then((data) => setPosts(data))
														.then(() => history.push('/private_posts'))
													}}>
													Delete
												</button>: ""}


											</div>	
												
											</div>
										</div>
									</div>
								)
							
						} 
					})}
				</div>
			</div>
		</>
	)
}
