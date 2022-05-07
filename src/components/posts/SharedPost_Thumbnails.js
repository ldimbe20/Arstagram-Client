import React, { useEffect, useState } from "react"
import { Link, } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import {  getPosts, postByMood, postByUser } from "./PostManager"
import { getCurrentUser, getUser } from "../artists/ArtistManager"
import { getMoods } from "../moods/MoodManager"
import "./posts.css"


export const ShowThumbnails = () => {
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
                <div className='main-title'>Thumbnails</div>
                <div className='columns'>



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
                        <div className='column is-center ml-2'>
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
							to={`/posts`}>
							Shared Post
						</Link>

					</fieldset>

                </div>




                <div className="columns is-flex-wrap-wrap">


                    {posts.map((finishedPost) => {
                        if (finishedPost.private === false) {
                            return (


                                <div className="column is-one-fifth mt-4">

                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image_small">
                                                <img className="image_small" src={`http://localhost:8000${finishedPost.image_url}`} alt="Submitted Artwork" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="content ">
                                                <Link
                                                    className='button is-primary is-small '
                                                    to={`/posts/${finishedPost.id}`}>
                                                    View Artwork
                                                </Link>
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

