import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import {deletePost,getPosts,updatePost} from "./PostManager"
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
					<div className='title'>Private Posts</div>

					



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
													src={`${finishedPost.image_url}`}
													alt='Submitted Artwork'
													className='img image is-rounded is-horizontal-center'
												/>
											<p>Title:{finishedPost.title}</p> 
                                            <p>Artist:{finishedPost.user.user.username}</p>    
											<p>Mood:{finishedPost.mood.mood_type}</p>
											<p>Mediums:{" "}
													{finishedPost.mediums_used
														?.map((m) => m.name)
														.join(", ")}
											</p>
                                            <p>Date:{finishedPost.publication_date} </p>
                                            <p>Notes:{finishedPost.notes} </p>
												<Link
													className='button is-link is-dark'
													to={`/posts/${finishedPost.id}/update`}>
													Edit
												</Link>
												<button
													className='button is-link is-dark'
													onClick={() => {
														deletePost(
															finishedPost.id
														).then(getPosts).then((data) => setPosts(data))
														.then(() => history.push('/private_posts'))
													}}>
													Delete
												</button>
                                               
												<Link
													className='button is-link is-dark'
													to={`/comments/${finishedPost.id}`}>
													Add Comment
												</Link>
												
												<Link
													className='button is-link is-dark'
													to={`/posts/${finishedPost.id}`}>
													View Comments
												</Link>
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
