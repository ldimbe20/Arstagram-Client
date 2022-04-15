import React, { useState } from "react"
import { createChecklist } from './ChecklistManager.js'
import { useHistory, } from "react-router-dom"
import { useEffect, useRef } from "react"

export const ChecklistForm = () => {
    const history = useHistory()
    



    const [currentChecklist, setCurrentChecklist] = useState({
        title: "",
        image_url: "",
        task: "",
        publication_date: "",
        user_id: "",
    })

    const handleAddChecklist = (domEvent) => {
        const copy = { ...currentChecklist }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentChecklist(copy)
    }



    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }



    const createImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            const copy = { ...currentChecklist }
            copy.image_url = base64ImageString,
                setCurrentChecklist(copy)
        });
    }


    return (
        <>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-one-fifth'></div>
                    <div className='column is-three-fifths'>
                        <div className='card-content'>
                            <h1 className='main-title'>Post Checklist</h1>
                            <form className='checklistForm'>

                            <div className="field my-5">
					<p className ='title is-5 mt-3 mb-1'>Upload Inspiration Image Here</p>
					<input className='input is-primary' type="file" id="imgdata" onChange={createImageString} placeholder='Upload Image'/>
					<input type="hidden" name="checklist_id" value={currentChecklist.id} />
                </div>

                                <fieldset className='field my-5'>
                                    <label className='title is-5 mt-3 mb-1'>Checklist Title</label>
                                    
                                        <input
                                            required
                                            autoFocus
                                            type='text'
                                            name='title'
                                            className='input is-primary'
                                            value={setCurrentChecklist.title}
                                            onChange={handleAddChecklist}
                                            placeholder='Add Title'/>
                                   
                                </fieldset>

                                <fieldset className='field'>
                                    <label className='title is-5 mb-0 '>Checklist Task</label>
                                    <div className='control'>
                                        <textarea
                                            name='task'
                                            className='textarea is-primary'
                                            value={setCurrentChecklist.task}
                                            onChange={handleAddChecklist}
                                            placeholder='Add Task'></textarea>
                                    </div>
                                </fieldset>


                                <div className='field'>
									<div className='control'>
										<button
											className='button is-primary '
											type='submit'
											onClick={(evt) => {
												evt.preventDefault()
												const newChecklist = {
												title: currentChecklist.title,
                                                task: currentChecklist.task,
                                                image_url: currentChecklist.image_url,
                                                publication_date: currentChecklist.publication_date
												}
												createChecklist(newChecklist).then(
													() =>
														history.push(
															`/checklists`
														)
												)
											}}>
											Post Checklist Item
										</button>
									</div>
                                </div>
                                

                             

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}








