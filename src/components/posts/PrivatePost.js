import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import {deletePost,getPosts,updatePost} from "./PostManager"

import "./posts.css"

export const ShowPrivatePost = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED

	const [posts, setPosts] = useState([])
	const history = useHistory()

	useEffect(() => {
		getPosts().then((data) => setPosts(data))
	}, [])

console.log(posts)

	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>  
			<div className='container'>
				<div className='column'>
					<div className='title'>Posts</div>

					{posts.map((finishedPost) => {
						if (finishedPost.private === true) 
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
												{/* <div>
											
												 <button className="button" onClick={() => {
													let text;
													if (confirm("Are you sure you'd like to delete?") == true) {
													 
													deletePost(finishedPost.id).then(getPosts)
													then(() => history.push('/private_posts'))} 
													else { text = "You canceled!" }
													
												}}>Delete</button>  */}
											{/* </div> */}
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
