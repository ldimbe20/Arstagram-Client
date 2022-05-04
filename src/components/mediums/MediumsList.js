
// This is the parent-all props are passed down to children
import { useEffect, useState } from "react"
import { getMediums } from "./MediumsManager"
import { MediumForm } from "./MediumForm"
import { ShowMedium } from "./Mediums"


export const Medium = () => {
    const [mediums, setMediums] = useState([])
    const [editBox, setEditBox] = useState(false)

    useEffect(() => {
        getMediums().then(setMediums)
    }, [])


    return (
        <>

            <div className="container">
                <div id="edit-modal" className={editBox ? "modal is-active" : "modal"}>
                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <div className="box">
                            <MediumForm setMediums={setMediums} mediums={mediums}
                            />

                        </div>
                    </div>

                </div>
                <h1 className="main-title">Materials</h1>
                <h2 className="title is-5">Current Listed Materials</h2>
                <div className="columns">


                    <ShowMedium setMediums={setMediums} mediums={mediums}
                         />

                    <div className="column is-one-third ml-6">
                        <MediumForm mediums={mediums} setMediums={setMediums} />
                    </div>
                </div>
            </div>
        </>
    )
}
