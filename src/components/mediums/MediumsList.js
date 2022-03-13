import { useEffect, useState } from "react"
import { getMediums } from "./MediumsManager"
import { MediumForm } from "./MediumForm"
import { ShowMedium } from "./Mediums"


export const Medium = () => {
    const [mediums, setMediums] = useState([])
    const [materialToEdit, setMediumToEdit] = useState({})
    const [editBox, setEditBox] = useState(false)

    useEffect(() => {
        getMediums().then(setMediums)
    }, [])




    return (
        <>
            <div id="edit-modal" className={editBox ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>

                <div className="modal-content">
                    <div className="box">
                        <MaterialForm setMediums={setMediums} mediums={mediums}
                            materialToEdit={materialToEdit} setEditBox={setEditBox} />
                    </div>
                </div>

            </div>
            <h1 className="title is-1 is-success">Medium</h1>
            <div className="columns is-centered">
                <ShowMedium setMediums={setMediums} mediums={mediums} 
                    setMediumToEdit={setMediumToEdit} setEditBox={setEditBox} />

                <div className="column is-one-third ml-6">
                    <MediumForm mediums={mediums} setMedium={setMediums} />
                </div>
            </div>
        </>
    )
}
