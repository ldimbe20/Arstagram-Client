import { deleteChecklist, getChecklists } from "./ChecklistManager"
import {getCurrentUser} from "../artists/ArtistManager"
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

                                return <div className="card" key={`checklist--${checklist.id}`}>

                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src={`http://localhost:8000${checklist.image_url}`}
                                     alt="Placeholder image"/>
                                    </figure>
                                </div>
                                
                                 <div className="level-left">

                                        <div className="card-header">
                                            {checklist.title}
                                        </div>

                                        <div className="card-content">
                                            {checklist.task}
                                        </div>

                                        <button className="button" onClick={() => { 
                                        deleteChecklist(checklist.id).then((res)=>{
                                            if (res.status === 304){
                                                window.alert("This checklist is already in use and cannot be deleted")
                                            }

                                        }).then(getChecklists)
                                            .then(setChecklists)
                                    }}></button>  
                                    </div>
                                    


                                </div>


                            }
                        )
                    }
              
                
            </div>
        
    )
}
