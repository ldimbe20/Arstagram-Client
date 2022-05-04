import { deleteChecklist, getChecklists } from "./ChecklistManager"
import { getCurrentUser } from "../artists/ArtistManager"
import React, { useEffect, useState } from "react"
import moment from "moment"
import "./checklist.css"



export const ShowChecklist = ({ checklists, setChecklists }) => {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        getCurrentUser().then((data) => setCurrentUser(data))
    }, [])


    return (



<>



      

            {

                checklists.map(
                    (checklist) => {
                        if (checklist.user.id === currentUser.id)

                            return <div className="column is-4-tablet is-3-desktop">
                                <div className="card" key={`checklist--${checklist.id}`}>
                                    <div className="card-image has-text-centered px-6">
                                        <figure className="image_checklist">
                                            <img src={`http://localhost:8000${checklist.image_url}`}
                                                alt="Placeholder image" />
                                        </figure>
                                    </div>

                                    <div className="card-content">
                                    <p className='title is-5 mt-3 mb-1'>Title of Task: {checklist.title}</p>
                                    <p className='title is-5 mt-3 mb-1'>Task Description: {checklist.task}</p>
                                    <p className='title is-5 mt-3 mb-1'>Date: {moment.utc(checklist.publication_date).format("MMMM Do YYYY")} </p>
                                    </div>

                                    <div className="has-text-centered">

                                        <button className="button is-primary is-small" onClick={() => {
                                            deleteChecklist(checklist.id).then((res) => {
                                                if (res.status === 304) {
                                                    window.alert("This checklist is already in use and cannot be deleted")
                                                }

                                            }).then(getChecklists)
                                                .then(setChecklists)
                                        }}>Finished with Task</button>
                                    </div>



                                </div>
                            </div>


                    }
                )
            }

</>
       

    )
}
