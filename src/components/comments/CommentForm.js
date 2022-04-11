import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createComment } from "./CommentManager"
import "./comments.css"



export const CommentForm = () => {
	const history = useHistory()
	// const [post, setPost] = useState([])
	const { postId } = useParams()

	const [currentComment, setCurrentComment] = useState({
		content: "",
		post_id: postId,
	})
	

	const handleAddComment = (domEvent) => {
		const copy = { ...currentComment }
		copy[domEvent.target.name] = domEvent.target.value
		setCurrentComment(copy)
	}

	return (
		<>
			<div className='container'>
				<div className='columns'>
					<div className='column is-one-fifth'></div>
					<div className='column is-three-fifths'>
						<div className='card-content'>
							<h1 className='main-title'>Post Comment</h1>
							<form className='commentForm'>
							
								<fieldset className='field'>
									<label className='title is-5 mb-0 '>Comment</label>
									<div className='control'>
										<textarea
											name='content'
											className='textarea is-primary'
											value={setCurrentComment.content}
											onChange={handleAddComment}
											placeholder='Add your comment'></textarea>
									</div>
								</fieldset>
								
								<div className='field'>
									<div className='control'>
										<button
											className='button is-primary '
											type='submit'
											onClick={(evt) => {
												evt.preventDefault()
												const newComment = {
													
													content:
														currentComment.content,
													post_id:
														currentComment.post_id,
												}
												createComment(newComment).then(
													() =>
														history.push(
															`/posts/${postId}`
														)
												)
											}}>
											Post Comment
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className='column is-one-fifth'></div>
				</div>
			</div>
		</>
	)
}
