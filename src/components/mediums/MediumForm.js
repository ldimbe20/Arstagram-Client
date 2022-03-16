import { createMedium } from './MediumsManager.js'
import {  useEffect, useRef } from "react"
import { useHistory } from 'react-router-dom'


export const MediumForm = ({ setMediums, mediums }) => {
    const name = useRef(null)

    const newMedium = (evt) => {
        evt.preventDefault()
            createMedium({
                name: name.current.value
            })
                .then(setMediums)
        }
    

    useEffect(() => {
        name.current.value = null
    }, [mediums])

    
    return (

        <form className="notification is-success has-text-weight-medium">
       
            <fieldset>
                <div className="form-group">
                    <name htmlFor="mediumName"></name>
                    <input className="box" type="text" id="mediumName" ref={name} required autoFocus placeholder="Add medium name" />
                </div>
            </fieldset>
            <button className="button mt-2 m-1" type="submit" onClick={(evt) => { newMedium(evt) }}>
                Save Medium
            </button>
        </form>

    )
}

