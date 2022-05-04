import { useEffect, useState } from "react"
import { getChecklists } from "./ChecklistManager"
import { ShowChecklist } from "./Checklist"
import { Link, } from "react-router-dom"
import "./checklist.css"


export const Checklist = () => {
    const [checklists, setChecklists] = useState([])


    useEffect(() => {
        getChecklists().then(setChecklists)
    }, [])

    return (
        <>

            <div className="container">
                <h1 className="main-title">To-Do List</h1>
                <h2 className="title is-5">Create a to-do list item of art tasks you would like to complete. Add an inspiration picture, title, and brief summary of the task you would like to complete.  </h2>



                <Link
                    className='button is-primary is-outlined mr-4'
                    to={`/checklistsform`}>
                    Add To-Do List Item
                </Link>




                <div className="p-4 columns mt-5 is-8 is-variable">

                    <ShowChecklist setChecklists={setChecklists} checklists={checklists} />
                </div>



            </div>

        </>
    )
}




