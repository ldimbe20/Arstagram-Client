// import fetch call from checklist manager

  


import { useEffect, useState } from "react"
import { getChecklists } from "./ChecklistManager"
import { ShowChecklist} from "./Checklist"
import { Link,  } from "react-router-dom"

import { ChecklistForm} from "./ChecklistForm"
import "./checklist.css"


export const Checklist = () => {
    const [checklists, setChecklists] = useState([])
  
    
    useEffect(() => {
        getChecklists().then(setChecklists)
    }, [])

    // useEffect(() => {
    //     getCurrentUser().then(setCurrentUser)
    // }, [])


    
    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className="main-title">Checklist</h1>
                    <p className="mb-4">Add a checklist of art tasks you would like to complete. </p>
                    <h2 className="title is-5">Add checklist item</h2>




                    {/* <Link className="p-4columns mt-5 is-8 is-variable">

                    <ChecklistForm setChecklists={setChecklists} checklists={checklists} />
                    </Link> */}

                    <Link
					className='button is-primary is-outlined mr-4'
					to={`/checklistform`}>
													Add Item
					</Link>
                    



                    <div className="p-4columns mt-5 is-8 is-variable">

                        <ShowChecklist setChecklists={setChecklists} checklists={checklists} />
                    </div>



                </div>

            </section>
        </>
    )
}

// ! look up how to pass a prop in a link lines 38-42


