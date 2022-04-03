import { deleteChecklist, getChecklists } from "./ChecklistsManager"
import {getCurrentUser} from "../artists/ArtistManager"
import React, { useEffect, useState } from "react"


export const ShowChecklist = ({ checklists, setChecklists }) => {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
		getCurrentUser().then((data) => setCurrentUser(data))
	}, [])


    return (
        <div className="column is-one-quarter mr-6">

            {
                
                checklists.map(
                    (checklist) => {
                        return <div className="notification is-primary p-3 has-text-weight-checklist" key={`checklist--${checklist.id}`}>
                           
                           
							
                             <button className="delete is-info" onClick={() => { 
                                deleteChecklist(checklist.id).then((res)=>{
                                    if (res.status === 304){
                                        window.alert("This checklist is already in use and cannot be deleted")
                                    }

                                }).then(getChecklists)
                                    .then(setChecklists)
                            }}></button>  
                          
                            <div className="level-left">

                                <div className="level-item px-5">
                                    {checklist.title}
                                </div>

                                <div className="level-item px-5">
                                    {checklist.task}
                                </div>
                            </div>

                         </div>
                    }
                )
            }

        </div>
    )
}
