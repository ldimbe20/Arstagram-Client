// need to import the fetch call to collect create post
// create state to record data when it is clicked
// create useeffect to record changes in state 
import { createChecklist } from './ChecklistManager.js'

export const ChecklistForm({ checklists, setChecklists }) => {


    const newChecklist = (evt)
        evt.preventDefault()
        return createChecklist({
            title: title.current.value,
            image_url: image_url.current.value,
            task: task.current.value,
            publication_date: "",

        })
            .then(data => {
                setChecklists(data)
                return true
            })

}

useEffect(() => {
    title.current.value = null
    image_url.current.value = null
    task.current.value = null
    publication_date.current.value = null

}, [checklists])

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
                        <h1 className='main-title'>Post Comment</h1>
                        <form className='commentForm'>

                            <div className="field my-5">
                                <p className='title is-5 mt-3 mb-1'>Upload Image Post Here</p>
                                <input className='input is-primary' type="file" id="imgdata" onChange={createImageString} placeholder='Upload Image' />
                                <input type="hidden" name="checklistimage" ref={image_url} />
                            </div>

                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="checklistTitle"></label>
                                    <h2 className="title is-5 has-text-light has-text-weight-bold">Add New Checklist Here</h2>
                                    <input className="box" type="text" id="checklistTitle" ref={title} required autoFocus placeholder="Add checklist title" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="checklistTask"></label>
                                    <h2 className="title is-5 has-text-light has-text-weight-bold">Add task description here</h2>
                                    <input className="box" type="text" id="checklistTask" ref={task} required autoFocus placeholder="Add task here" />
                                </div>
                            </fieldset>

                            <button className="button mt-2 m-1" type="submit"
             onClick={(evt) => { newChecklist(evt)
             .then(() => history.push('/mediums'))}}>
                Save Medium
            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
)








