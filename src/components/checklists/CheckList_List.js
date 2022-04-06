// import fetch call from checklist manager
//  create state to record checklists when they fetched from server side
//  


import { useEffect, useState } from "react"
import { getChecklists } from "./ChecklistManager"
import { ShowChecklist } from "./Checklist"


export const Checklist = () => {
    const [checklists, setChecklists] = useState([])
    
    useEffect(() => {
        getChecklists().then(setChecklists)
    }, [])


    
    return (
        <>
            <div className="container">
                
                <div className = "column">
                        <div className="column is-vcentered">
                            <h1 className="main-title">Checklist</h1>
                            <h2 className="title is-5">Your Current Checklist</h2> 
                               
                            <ShowChecklist setChecklists={setChecklists} checklists={checklists}  /> 

                </div>
                
                </div>
            </div>
        </>
    )
}
