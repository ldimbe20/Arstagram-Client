import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByPostId, deleteComment } from "./CommentManager"
import "./comments.css"

export const CommentList = () => {
	const [comments, setComments] = useState([])
	const [loading, isLoading] = useState(true)
	const { postId } = useParams()
	const [image, setImage] = useState("")
	
	
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
		     <div className='title'>Posts</div>
             
			 <div>
				 <img
						src={image}
						alt='Submitted Artwork'
						className='img image is-rounded is-horizontal-center'
			/></div>
                     
			{comments.map((comment) => {
				return (
					<div
						className='card equal-height'
						key={`comment--${comment.id}`}>
						<div className='columns card-content'>
							<div className='column is-three-quarters'>
								<h4 className='subtitle'>
									{comment.content}
								</h4>
								<h2 className='subtitle'>
									Written by {comment.user.user?.username}
								</h2>
								{/* <button
													className='button is-link is-dark'
													onClick={() => {
														deleteComment(
															comment.id
														).then(getCommentsByPostId(postId)).then((data) => setComments(data))
														.then(() => history.push('/posts/${postId}'))
													}}>
													Delete
								 </button> */}
								


							</div>   
						</div>
					</div>
				)
			})}
		</>
	)
}
