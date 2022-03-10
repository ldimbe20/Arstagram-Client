import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createPost, getPosts } from "./PostManager"

// 'user', 'category', 'title', 'image_url', 'content', 'tags'

export const PostForm = () => {
	const [categories, updateCategories] = useState([])
	const [tags, setTags] = useState([])
	const history = useHistory()

	// Below code allows users to upload their own photos 

	// const getBase64 = (file, callback) => {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(file);
    //   }
    
    //   const createImageString = (event) => {
    //     getBase64(event.target.files[0], (base64ImageString) => {
    //         console.log("Base64 of file is", base64ImageString);
    //         // Update a component state variable to the value of base64ImageString
    //         setString(base64ImageString)
    //     });
    //   }
  

	const [post, setPost] = useState({
		// Declaring State variable
		user_id: "",
		category_id: 1,
		title: "",
		publication_date: "",
		image_url: string,
		content: "",
		approved: 1,
		
	})




	const fetchTags = () => {
		return (
			fetch("http://localhost:8000/tags", {
				method: "GET",
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with showCategories
					setTags(data)
				})
		)
	}

	useEffect(() => {
		fetchTags()
	}, [])

	useEffect(() => {
		fetch(`http://localhost:8000/categories`, {
			method: "GET",
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				updateCategories(data)
			})
	}, [])

	const changePostState = (event) => {
		const copy = { ...post }
		copy[event.target.name] = event.target.value
		setPost(copy)
	}

	return (
	<div className='container'>
		<form className='Column'>
			<h2 className='title'>Create New Post</h2>
			    
			
	
				<div className='field my-5'>
				<label htmlFor='image'>Image:</label>
					<input
						type='url'
						name='image_url'
						placeholder='URL of img'
						className='input'
						value={post.image_url}
						onChange={changePostState}
					/>
				</div>
				<input type="file" id="post_image" onChange={createImageString} />
				<input type="hidden" name="post_id" value={post.id} />
				<button onClick={() => {
					// Upload the stringified image that is stored in state
				}}>Upload</button>




				<div className="field my-5">
                    <label className="label">Title </label>
                    <div className="control">
						<input
							required
							autoFocus
							type='text'
							name='title'
							className='input'
							placeholder='Title'
							value={post.title}
							onChange={changePostState}
						/>
					</div>
				</div>
				<div>
					<div className='field my-5'>
						<label className="label">Content:</label>
						<input
							required
							autoFocus
							type='text'
							name='content'
							className='input'
							placeholder='Content'
							value={post.content}
							onChange={changePostState}
						/>
					</div>
				</div>
				
				
				<div className="field my-5">
                   <label className="label">Category</label>
						<div className="control">
							<div className="select">
								<select
									onChange={
										(evt) => {
											const copy = { ...post }
											copy.categoryId = parseInt(evt.target.value)
											setPost(copy)
										}
									}>
									<option> Choose a Category </option>
									{
										categories.map(category => {
											return <option key={category.id} value={category.id}>{category.label}</option>
										})
									}
								</select>
							</div>
                    </div>
                </div>








					<div className='field my-5'>
						<label className='label'> Tags </label>
						{tags.map((tag) => {
							return (
								<div className='control my-2'>
									<label className='checkbox has-text-weight-medium'>
										<input
											type='checkbox'
											className='mr-2'
											name='tag'
											value={tag.id}
											key={`tag--${tag.id}`}
											onChange={(evt) => {
												const copy = { ...post }
												copy.tags.has(
													parseInt(evt.target.value)
												)
													? copy.tags.delete(
															parseInt(
																evt.target.value
															)
													)
													: copy.tags.add(
															parseInt(
																evt.target.value
															)
													)
												setPost(copy)
											}}
										/>
										{tag.label}
									</label>
								</div>
							)
						})}
					</div>
				

				<button
					type='submit'
					onClick={(evt) => {
						evt.preventDefault()

						const newPost = {
							user_id: post.user_id,
							category: post.category_id,
							title: post.title,
							publication_date: Date.now(),
							image_url: post.image_url,
							content: post.content,
							approved: 1,
							tags: Array.from(post.tags),
						}

						createPost(newPost)
							.then(() => history.push("/posts"))
							.then(getPosts)
					}}
					className='btn btn-primary'>
					Create
				</button>
			</form>
        
	</div>
	)
}
