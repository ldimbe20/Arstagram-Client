import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createPost, getPosts } from "./PostManager"
import Multiselect from "multiselect-react-dropdown";




export const PostForm = () => {
	const [mediums, setMediums] = useState([])
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
		mood_id: 1,
		title: "",
		publication_date: "",
		image_url: "",
		notes: "",
		private: "",
		mediums_used: [],
		
	})






	const fetchMediums = () => {
		return (
			fetch("http://localhost:8000/mediums", {
				method: "GET",
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with showCategories
					setMediums(data)
				})
		)
	}

  

	useEffect(() => {
		fetchMediums()
	}, [])



	// useEffect(() => {
	// 	fetch(`http://localhost:8000/categories`, {
	// 		method: "GET",
	// 		headers: {
	// 			Authorization: `Token ${localStorage.getItem("token")}`,
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			updateCategories(data)
	// 		})
	// }, [])

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
				{/* <input type="file" id="post_image" onChange={createImageString} />
				<input type="hidden" name="post_id" value={post.id} /> */}
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
						<label className="label">Notes:</label>
						<input
							required
							autoFocus
							type='text'
							name='name'
							className='input'
							placeholder='Name'
							value={post.name}
							onChange={changePostState}
						/>
					</div>
				</div>
				
				
				<div className="field my-5">
                   <label className="label">Medium</label>
						<div className="control">
							<div className="select">
								<select
									onChange={
										(evt) => {
											const copy = { ...post }
											copy.mediumId = parseInt(evt.target.value)
											setPost(copy)
										}
									}>
									<option> Choose a Medium </option>
									{
										mediums.map(medium => {
											return <option key={medium.id} value={medium.id}>{medium.name}</option>
										})
									}
								</select>
							</div>
                    </div>
                </div>

				<Multiselect
						isObject={false}
						onRemove={	(evt) => {
							const copy = { ...post }
							copy.mediumId = parseInt(evt.target.value)
							setPost(copy)
						}}
						// onRemove={function noRefCheck() {}}
						onSelect={function noRefCheck() {}}

						
						onSelect={	(array_of_mediums) => {
							// console.table(evt)
							// console.log(Array.isArray(evt))
							// ! push this array to state


							
							// console.log(evt.value)
							const copy = { ...post }
							// copy.mediumId = parseInt(evt.target.value)
							setPost({...copy,
								mediums_used: array_of_mediums,
							})
						}}
						// options={mediums.map(medium => medium.name)}
						options={mediums.map((medium) => medium.name)}

						selectedValues={[
							{
							  cat: 'Group 1',
							  key: 'Option 1'
							},
							{
							  cat: 'Group 1',
							  key: 'Option 2'
							}
						  ]}
						
						

						// selectedValues={["pizza"]}
						showCheckbox
      				/>







					{/* <div className='field my-5'>
						<label className='label'> Mediums </label>
						{mediums.map((medium) => {
							return (
								<div className='control my-2'>
									<label className='checkbox has-text-weight-medium'>
										<input
											type='checkbox'
											className='mr-2'
											name='medium'
											value={medium.id}
											key={`medium--${medium.id}`}
											onChange={(evt) => {
												const copy = { ...post }
												copy.mediums.has(
													parseInt(evt.target.value)
												)
													? copy.mediums.delete(
															parseInt(
																evt.target.value
															)
													)
													: copy.mediums.add(
															parseInt(
																evt.target.value
															)
													)
												setPost(copy)
											}}
										/>
										{medium.name}
									</label>
								</div>
							)
						})}
					</div> */}






					
				

				<button
					type='submit'
					onClick={(evt) => {
						evt.preventDefault()

						const newPost = {
							user_id: post.user_id,
							mood_id: post.mood_id,
							title: post.title,
							publication_date: Date.now(),
							image_url: post.image_url,
							notes: post.notes,
							private: 1,
							mediums: Array.from(post.mediums),
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
