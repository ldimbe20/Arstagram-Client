import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {postById} from "./PostManager"


export const PrivatePostSingle = () => {
	const [loading, isLoading] = useState(true)
	const { postId } = useParams()
    const [post, setPosts] = useState([])
	const [image, setImage] = useState("")
	






	useEffect(() => {
		isLoading(true)
		postById(postId).then(data => {
			setImage(data.image_url)
            setPosts(data)
			

			// !Challenge content not loading in time and data is returning undefined
			// / grabbing the url from index 0 because that is the data that was returned, otherwise it is undefined

		})
		isLoading(false)
	}, [])


	if (loading) return <div>Loading</div>

	return (


		<>
			<div className="container">
				<div className='main-title mb-2'>Private Posts</div>

				<div className='column'>
					<div>
						<Link
							className='button is-primary is-outlined mb-6'
							to={`/private_posts`}>
							Back to Private Post List
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
											{post ?
												<h2 className='title is-5  has-text-weight-bold is-size-3 mb-4 mt-4'>{post.title}</h2>
                                                 : ""}

										</div>
                                        <div>
											{post ?
												<h2 className='title is-5  has-text-weight-bold is-size-4 mb-4 mt-4'>Created by {post.user?.user?.username}</h2>
                                                 : ""}

										</div>



							
									</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
