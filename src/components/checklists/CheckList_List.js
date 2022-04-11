// import fetch call from checklist manager

  


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
           <section className ="section">
                <div className = "container">
                    <h1 className="main-title">Checklist</h1>
                    <p class="mb-4">Add a checklist of art tasks you would like to complete. </p>
                    <h2 className="title is-5">Your Current Checklist</h2> 
                                <button className="button is-primary">Add CheckList Item</button>
                                {/* import checklist form functions-set props to be used*/}
       
                                <div className = "p-4columns mt-5 is-8 is-variable">
                                        
                                        <ShowChecklist setChecklists={setChecklists} checklists={checklists}  /> 
                                </div>
                                
                
                </div>
           
            </section>
        </>
    )
}


