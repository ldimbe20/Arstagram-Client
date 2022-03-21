import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import {getMoods} from "../moods/MoodManager"
import {getMediums} from "../mediums/MediumsManager"
import { getPosts, updatePost, postById } from "./PostManager"
import Multiselect from "multiselect-react-dropdown";
import "../auth/auth.css"


export const UpdatePost = () => {
    const history = useHistory()
    const [loading, isLoading] = useState(true)
    const [mediums, setMediums] = useState([])
	const [moods, setMoods] = useState([])
    const [image, setImage] = useState("")
    const [imagePost, setImagePost] = useState([])
    const { postId } = useParams()
    const [post, setPost] = useState({ // Declaring State variable
        user_id: "",
		mood_id: 1,
		title: "",
		publication_date: "",
		image_url: "",
		notes: "",
		private: false,
		mediums_used: [],
    })


    useEffect(() => {
		isLoading(true)
		postById(postId).then(data => {
            setImagePost(data)
            console.log(data)
		    setImage(data.image_url)
		})
		isLoading(false)
	}, [])

    


    useEffect(()=> {
        getMoods().then(m => setMoods(m))
    }, [])
	
	useEffect(()=> {
        getMediums().then(m => setMediums(m))
    }, [])


    useEffect(() => {
        postById(postId).then(data => setPost({
            user_id: data.user_id,
            mood_id: data.mood_id,
            title: data.title,
            publication_date: data.publication_date,
            // image_url: data.image_url,
            notes: data.notes,
            private: data.private,
            mediums_used: Array.from(data.mediums_used)


        }))
    }, [])

    //getting initial data to set on first render- this will change anytime categoryId changes 

    const changePostState = (domEvent) => {
        const copy = { ...post }
        copy[domEvent.target.name] = domEvent.target.value
        setPost(copy)

    } 

    if (loading) return <div>Loading</div>

    return (

        <>
          

            <div className='container'>
                <form className='Column'>

                <div>
                {image?
				 <img
						src={`http://localhost:8000${image}`}
						alt='Submitted Artwork'
						className='img image is-rounded is-horizontal-center'
			    />:""}</div>

                    <div className="field my-5">
                        <label className="title is-5 mt-3 mb-1">Title </label>
                        <div className="control">
                            <input
                                required
                                autoFocus
                                type='text'
                                name='title'
                                className='input is-primary'
                                placeholder='Name'
                                value={post.title}
                                onChange={changePostState}
                            />
                        </div>
                    </div>



                    <div className="field my-5">
                        <label htmlFor='mood-select' className="title is-5 mt-3 mb-1"> Choose a mood:</label>
                        <select
                            name='mood'
                            className='input is-primary'
                            placeholder='mood_id'
                            id='mood-select'
                            value={post.mood_type}
                            onChange={(evt) => {
                                const copy = { ...post }
                                copy.mood_id = parseInt(evt.target.value)
                                setPost(copy)
                            }}>
                            <option value=''>--Please choose a mood-</option>
                            {moods.map((mood) => (
                                <option key={mood.id} value={mood.id}>
                                    {mood.mood_type}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className='field my-5'>
                        <label className="title is-5 mt-3 mb-1">Notes:</label>
                        <input
                            required
                            autoFocus
                            type='text'
                            name='notes'
                            className='input is-primary'
                            placeholder='Notes'
                            value={post.notes}
                            onChange={changePostState}
                        />
                    </div>

                    <div className="field my-5">
                        <label className="title is-5 mt-3 mb-1">Add Materials Below </label>
                        <Multiselect
                            placeholder='mediums_used'
                            displayValue="key"
                            value={post.mediums_used}
                            isObject={true}
                            onRemove={(array_of_mediums) => {
                                const array_of_newMediums = array_of_mediums.map((medium) => (medium.id))

                                const copy = { ...post }
                                setPost({
                                    ...copy,
                                    mediums_used: array_of_newMediums,
                                })
                            }}
                            //when item is clicked the event is recorded(array_of_mediums) 
                            onSelect={(array_of_mediums) => {
                                //below we are making a copy of post object then resetting the setPost to the post object, but changing the mediums_used with recorded event
                                //on line 164
                                const array_of_newMediums = array_of_mediums.map((medium) => (medium.id))

                                const copy = { ...post }
                                setPost({
                                    ...copy,
                                    mediums_used: array_of_newMediums,
                                })
                            }}

                            options={mediums.map((medium) => ({ id: medium.id, key: medium.name }))
                            }

                        />
                    </div>


                    {/* This checkbox isn't recording state and I dont know why. Does it have some to do with event.target.checked */}
                    <div className="Private">
                        <label className="title is-5 mt-3 mb-1">Check Here If Post Is Private:</label>
                        <input type="checkbox"
                        className='checkbox'
                        value={post.private}
                            onChange={
                                (event) => {
                                    const copy = { ...post }
                                    copy.private = event.target.checked
                                    setPost(copy)
                                }
                            } />
                    </div>



                    <button type="submit"
                        onClick={evt => {
                            evt.preventDefault()
                            updatePost(postId, post)
                                .then(()=>{
                                    if(newPost.private) {
                                        history.push("/private_posts")}
                                    else 
                                    {
                                        history.push("/posts")
                                        }
                                })	
                        }}
                        className="button is-primary mr-4 mt-4'">Update</button>


                </form>
            </div>
        </>

    )
}