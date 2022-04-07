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
                                    <figure className="image_checklist">
                                    <img src={`http://localhost:8000${checklist.image_url}`}
                                     alt="Placeholder image"/>
                                    </figure>
                                </div>
                                
                                 <div className="level-center">

                                        <div className="card-content">
                                            {checklist.title}
                                        </div>

                                        <div className="card-content">
                                            {checklist.task}
                                        </div>

                                        <p className='card-content'>Date:{checklist.publication_date} </p>


                                           
                                        <div className="has-text-centered">
                                            <button className="button is-primary is-small" onClick={() => { 
                                            deleteChecklist(checklist.id).then((res)=>{
                                                if (res.status === 304){
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
