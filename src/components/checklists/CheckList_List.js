// import fetch call from checklist manager
//  create state to record checklists when they fetched from server side
//  


import { useEffect, useState } from "react"
import { getChecklists } from "./ChecklistManager"
import { ShowChecklist } from "./Checklist"
import "./checklist.css"


export const Checklist = () => {
    const [checklists, setChecklists] = useState([])
    
    useEffect(() => {
        getChecklists().then(setChecklists)
    }, [])


    
    return (
        <>
        <section className = "Section">
            <div className = "container">
                
                <div className = "column">
                <h1 className="main-title">Checklist</h1>
                        <h2 className="title is-5">Your Current Checklist</h2> 

                    <div className = "container">

                        <div className = "columns mt-5 is-8 is-variable">
                                <div className = "columns mt-5 is-8 is-variable">
                                <ShowChecklist setChecklists={setChecklists} checklists={checklists}  /> 
                                </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </section>
        </>
    )
}
