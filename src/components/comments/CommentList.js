import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getCommentsByPostId, deleteComment } from "./CommentManager"
import { getCurrentUser } from "../artists/ArtistManager"
import "./comments.css"

export const CommentList = () => {
	const [comments, setComments] = useState([])
	const [currentUser, setCurrentUser] = useState([])
	const [loading, isLoading] = useState(true)
	const { postId } = useParams()
	const [image, setImage] = useState("")



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
			// grabbing the url from index 0

		})
		isLoading(false)
	}, [])


	if (loading) return <div>Loading</div>

	return (


		<>
			<div className="container">
				<div className='main-title'>Posts</div>

				<div>
					{image ?
						<img
							src={`http://localhost:8000${image}`}
							alt='Submitted Artwork'
							className='image is-rounded is-horizontal-center'
						/> : ""} </div>


				{comments.map((comment) => {
					return (
						<div
							className='None'
							key={`comment--${comment.id}`}>
							<div className='columns card-content'>
								<div className='column is-three-quarters mt-4 has-text-left'>
									<h4 className='subtitle'>
										{comment.content}
									</h4>
									<h2 className='title is-5 mb-4'>
										Written by {comment.user.user?.username}
									</h2>
									{comment.user.id === currentUser.id ?
										<button

											className='button is-primary'
											onClick={() => {
												deleteComment(
													comment.id
												).then(getAllPostComments)
											}}>
											Delete

										</button> : ""}


								</div>
							</div>
						</div>
					)
				})}

				<div>
					<Link
						className='button is-primary is-outlined mt-4'
						to={`/posts`}>
						Back to Share Posts
					</Link>
				</div>
			</div>

		</>
	)
}
