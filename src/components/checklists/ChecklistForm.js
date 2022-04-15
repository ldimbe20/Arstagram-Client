import React, { useState } from "react"
import { createChecklist } from './ChecklistManager.js'
import { useEffect, useRef } from "react"

export const ChecklistForm = () => {
    



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

    const title = useRef(null)
    // useRef is a way to collect data, instead of using an onChange. This will set the data for title

    //     const newChecklist = (evt)=>{
    //         evt.preventDefault()
    //         return createChecklist({
    //             title: title.current.value,
    //             image_url: image_url.current.value,
    //             task: task.current.value,
    //             publication_date: "",

    //         })
    //             .then(data => {
    //                 setChecklists(data)
    //                 return true
    //             })

    // }


    // useEffect(() => {
    //     title.current.value = null
    //     image_url.current.value = null
    //     task.current.value = null
    //     publication_date.current.value = null

    // }, [checklists])

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }



    const createImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            const copy = { ...post }
            copy.image_url = base64ImageString,
                setPost(copy)
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

                                {/* <div className="field my-5">
                                <p className='title is-5 mt-3 mb-1'>Upload Image Post Here</p>
                                <input className='input is-primary' type="file" id="imgdata" onChange={createImageString} placeholder='Upload Image' />
                                <input type="hidden" name="checklistimage" ref={image_url} />
                            </div> */}

                                <fieldset className='field'>
                                    <label className='title is-5 mb-0 '>Checklist Title</label>
                                    <div className='control'>
                                        <textarea
                                            name='title'
                                            className='textarea is-primary'
                                            value={setCurrentChecklist.title}
                                            onChange={handleAddChecklist}
                                            placeholder='Add Title'></textarea>
                                    </div>
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

                                <fieldset className='field'>
                                    <label className='title is-5 mb-0 '>Add Inspiration Image</label>
                                    <div className='control'>
                                        <textarea
                                            name='image_url'
                                            className='textarea is-primary'
                                            value={setCurrentChecklist.image_url}
                                            onChange={createImageString}
                                            placeholder='upload Image'></textarea>
                                    </div>
                                </fieldset>

                                <div className='field'>
									<div className='control'>
										<button
											className='button is-primary '
											type='submit'
											onClick={(evt) => {
												evt.preventDefault()
												const newComment = {
												title: currentChecklist.title,
                                                task: currentChecklist.task,
                                                image_url: currentChecklist.image_url,
                                                publication_date: currentChecklist.publication_date
												}
												createComment(newComment).then(
													() =>
														history.push(
															`/posts/${postId}`
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








