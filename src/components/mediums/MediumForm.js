import { createMedium } from './MediumsManager.js'
import {  useEffect, useRef } from "react"
import { useHistory } from 'react-router-dom'


export const MediumForm = ({ setMediums, mediums }) => {
    const name = useRef(null)
    const history = useHistory()

    const newMedium = (evt) => {
        evt.preventDefault()
            return createMedium({
                name: name.current.value
            })
                .then(data => {
                    setMediums(data)
                    return true
                })
                
        }
    

    useEffect(() => {
        name.current.value = null
    }, [mediums])

    
    return (

        <form className="notification is-primary has-text-weight-medium">
       
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mediumName"></label>
                    <h2 className="title is-5 has-text-light has-text-weight-bold">Add New Art Material Here</h2>
                    <input className="box" type="text" id="mediumName" ref={name} required autoFocus placeholder="Add medium name" />
                </div>
            </fieldset>
            
            <button className="button mt-2 m-1" type="submit"
             onClick={(evt) => { newMedium(evt)
             .then(() => history.push('/mediums'))}}>
                Save Medium
            </button>

        </form>

    )
}


