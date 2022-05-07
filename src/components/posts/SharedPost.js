import React, { useEffect, useState } from "react"
import { Link, } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deletePost, getPosts, postByMood, postByUser } from "./PostManager"
import { getCurrentUser, getUser } from "../artists/ArtistManager"
import { getMoods } from "../moods/MoodManager"
// import "./posts.css"
import moment from "moment"

export const ShowPost = () => {
	const [currentUser, setCurrentUser] = useState([])
	const [posts, setPosts] = useState([])
	const [moodChoice, setMoodChoice] = useState(0)
	const [userChoice, setUserChoice] = useState(0)
	const [moods, setMoods] = useState([])
	const [users, setUsers] = useState([])
	const history = useHistory()




	useEffect(() => {
		getPosts().then((data) => setPosts(data))
	}, [])

	useEffect(() => {
		getMoods().then((data) => setMoods(data))
	}, [])

	useEffect(() => {
		getCurrentUser().then((data) => setCurrentUser(data))
	}, [])

	useEffect(() => {
		getUser().then((data) => setUsers(data))
	}, [])


	useEffect(() => {
		if (moodChoice)
			postByMood(moodChoice).then((posts) => {
				setPosts(posts)
			})
		else {
			getPosts().then((data) => setPosts(data))
		}
	}, [moodChoice])

	useEffect(() => {
		if (userChoice)
			postByUser(userChoice).then((posts) => {
				setPosts(posts)
			})
		else {
			getPosts().then((data) => setPosts(data))
		}
	}, [userChoice])

	// all the above useEffects are reacting to to the methods created on back-end





	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>
			<div className='container'>
				<div className='main-title'>Shared Posts</div>
				<div className='columns mb-4'>



					<fieldset>
						<div className='column '>
							<label htmlFor='mood-select'
								className='title is-5 mb-0 ml-5'>
								{" "}
								Choose a Mood
							</label>
						</div>
						<div className='select is-primary mr-5 '>
							<select

								id='mood-select'
								onChange={(evt) => {
									setMoodChoice(parseInt(evt.target.value))
								}}>
								<option value='0'>
									--Please choose a mood-
								</option>
								{moods.map((mood) => (
									<option key={mood.id} value={mood.id}>
										{mood.mood_type}
									</option>
								))}
							</select>
						</div>
					</fieldset>

					<fieldset>
						<div className='column is-center ml-2 '>
							<label htmlFor='mood-select ml-5'
								className='title is-5 mb-0 ml-5'>
								{" "}
								Choose a User
							</label>
						</div>
						<div className='select is-primary'>
							<select
								className='select is-primary'
								id='user-select'
								onChange={(evt) => {
									setUserChoice(parseInt(evt.target.value))
								}}>
								<option value='0'>
									--Please choose a user-
								</option>

								{users.map((user) =>
								(
									<option key={user.id} value={user.id}>
										{user.user.username}
									</option>
								))}

							</select>


						</div>
					</fieldset>
					<fieldset>
						<Link
							className='button is-primary mt-6 ml-4'
							to={`/thumbnails`}>
							See Thumbnails
						</Link>

					</fieldset>


				</div>
			</div>


			<div className='container'>
				<div className='column'>




					{posts.map((finishedPost) => {
						if (finishedPost.private === false) {
							return (
								<div
									className='card equal-height'
									key={`finishedPost-${finishedPost.id}`}>
									<div className='card-content'>
										<div className='card-image'>

											<div className="columns mb-2 is-centered">
												<figure className="image is-inline-block">
													<img className="is-rounded" src={`http://localhost:8000${finishedPost.image_url}`}
														alt='Submitted Artwork' />
												</figure>


												<div className="column is-one-quarter ml-4 mb-12">
													<div className="column-test"> </div>

													<p className='title is-5  has-text-weight-bold is-size-2 mb-1'> {finishedPost.title}</p>
													<p className='title is-5 is-size-4 mb-3 has-text-weight-bold' is-size-3>By {finishedPost.user.user.username}</p>
													<p className='title is-6 mb-1'>Created on {moment.utc(finishedPost.publication_date).format("MMMM Do YYYY")} </p>
													
													<p className='title is-6 mb-1'> {finishedPost.user.user.username}'s mood: {finishedPost.mood.mood_type} </p>
													<p className='title is-6 mb-4' >	Created with {" "}
														{finishedPost.mediums_used
															?.map((m) => m.name)
															.join(", ")}
													</p>
													<p className='title is-5 mb-0 has-text-weight-bold'>Notes From Artist </p>
													<p className='title is-5 mb-2 is-6 is-italic'>{finishedPost.notes} </p>
													<div className="column is-centered ml-4 mt-0">
													<Link
														className='button is-primary is-outlined is-small mr-4'
														to={`/comments/${finishedPost.id}`}>
														Add Comment
													</Link>

													<Link
														className='button is-primary is-outlined is-small mr-4'
														to={`/posts/${finishedPost.id}`}>
														View Comments
													</Link>
												<div className='columns ml-6 mt-2'>
													<div className='column'>
												
												{
													finishedPost.user.user.id === currentUser.id ?

														<Link
															className='button is-primary is-outlined is-small mr-4'
															to={`/posts/${finishedPost.id}/update`}>
															Edit
														</Link> : ""}

												{
													finishedPost.user.user.id === currentUser.id ?
														<button
															className='button is-primary is-outlined is-small'
															onClick={() => {
																deletePost(
																	finishedPost.id
																).then(getPosts).then((data) => setPosts(data))
																	.then(() => history.push('/posts'))
															}}>
															Delete
														</button> : ""}
														</div>
											</div>
														</div>
</div>
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
