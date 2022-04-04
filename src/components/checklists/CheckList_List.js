// import fetch call from checklist manager
//  create state to record checklists when they fetched from server side
//  


import { useEffect, useState } from "react"
import { getChecklists } from "./ChecklistManager"


export const Checklist = () => {
    const [checklists, setChecklists] = useState([])
    
    useEffect(() => {
        getChecklists().then(setChecklists)
    }, [])


    
    return (
        <>
  
        <div className="container">
            {/* <div id="edit-modal" className={editBox ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>

                <div className="modal-content">
                    <div className="box">
                        <ChecklistForm setChecklists={setChecklists} checklists={checklists}
                            materialToEdit={materialToEdit} setEditBox={setEditBox} />

                    </div>
                </div> */}

            {/* </div> */}
            <h1 className="main-title">Checklist</h1>
            <h2 className="title is-5">Your Current Checklist</h2>
             <div className="columns">
            
                
                <ShowChecklist setChecklists={setChecklists} checklists={mediums} 
                    setChecklistToEdit={setChecklistToEdit} setEditBox={setEditBox}
                    setChecklistPosts={setChecklistPosts} mediumPosts={mediumPosts} />

                <div className="column is-one-third ml-6">
                    <ChecklistForm checklists={checklists} setChecklists={setChecklists} />
                </div>
            </div> 
        </div>
        </>
    )
}
