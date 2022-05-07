import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getCommentsByPostId, deleteComment } from "./CommentManager"
import { getCurrentUser } from "../artists/ArtistManager"


export const CommentList = () => {
	const [comments, setComments] = useState([])
	const [currentUser, setCurrentUser] = useState([])
	const [loading, isLoading] = useState(true)
	const { postId } = useParams()
	const [image, setImage] = useState("")
	const [title, setTitle] = useState("")



	const getAllPostComments = () => getCommentsByPostId(postId).then(data => setComments(data))

	useEffect(() => {
		getAllPostComments()
	}, [])

	useEffect(() => {
		getCurrentUser().then((data) => setCurrentUser(data))
	}, [])




	useEffect(() => {
		isLoading(true)
		getCommentsByPostId(postId).then(data => {
			setComments(data)
			setImage(data[0].post?.image_url)
			setTitle(data[0].post?.title)

			// !Challenge content not loading in time and data is returning undefined
			// / grabbing the url from index 0 because that is the data that was returned, otherwise it is undefined

		})
		isLoading(false)
	}, [])


	if (loading) return <div>Loading</div>

	return (


		<>
			<div className="container">
				<div className='main-title mb-2'>Posts</div>

				<div className='column'>
					<div>
						<Link
							className='button is-primary is-outlined mb-6'
							to={`/posts`}>
							Back to Share Posts
						</Link>
					</div>




					<div className='columns mb-4'>



						<div className='column'>

							<div className='columns mb-2 is-centered'>
								<div className='column-test'></div>
								
									{image ?
										<img
											src={`http://localhost:8000${image}`}
											alt='Submitted Artwork'
											className='image is-rounded is-horizontal-center'
										/> : ""}

									<div className='column mt-4 has-text-left ml-4'>
										<div className="column-test"> </div>
										<div>
											{title ?
												<h2 className='title is-5  has-text-weight-bold is-size-3 mb-4 mt-4'>{title}</h2> : ""}

										</div>


										{comments.map((comment) => {
											return (
												<>
													<div
														className='None'
														key={`comment--${comment.id}`}>



														
														<h2 className='title is-6 mb-1 has-text-weight-bold'>
															Comment from {comment.user.user?.username}
														</h2>
														<h4 className='title is-5 mb-2 is-6 is-italic'>
															{comment.content}
														</h4>
														{comment.user.id === currentUser.id ?
															<button

																className='button is-primary mb-6'
																onClick={() => {
																	deleteComment(
																		comment.id
																	).then(getAllPostComments)
																}}>
																Delete

															</button> : ""}



													</div>


												</>)
										})}
									</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
