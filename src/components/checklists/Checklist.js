import { deleteChecklist, getChecklists } from "./ChecklistManager"
import { getCurrentUser } from "../artists/ArtistManager"
import React, { useEffect, useState } from "react"



export const ShowChecklist = ({ checklists, setChecklists }) => {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        getCurrentUser().then((data) => setCurrentUser(data))
    }, [])


    return (







        <div className="column">


            {

                checklists.map(
                    (checklist) => {

                        return <div className = "columns is-4-tablet is-3-desktop">
                        <div className="card" key={`checklist--${checklist.id}`}>
                            <div className="card-image has-text-centered px-6">
                                    <figure className="image_checklist">
                                        <img src={`http://localhost:8000${checklist.image_url}`}
                                            alt="Placeholder image" />
                                    </figure>
                                </div>

                                    <div className="card-content">
                                        <p>{checklist.title}</p>
                                        <p>{checklist.task}</p>
                                        <p>Date:{checklist.publication_date} </p>
                                    </div>

                                    <div className="has-text-centered">
                                        <button className="button is-primary is-small" onClick={() => {
                                            deleteChecklist(checklist.id).then((res) => {
                                                if (res.status === 304) {
                                                    window.alert("This checklist is already in use and cannot be deleted")
                                                }

                                            }).then(getChecklists)
                                                .then(setChecklists)
                                        }}>Finished</button>
                                    </div>

                              

                            </div>
                        </div>

                       


                    }
                )
            }


        </div>

    )
}
