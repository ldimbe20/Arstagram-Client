import { useEffect, useState } from "react"
import { getMediums, getMediumPosts } from "./MediumsManager"
import { MediumForm } from "./MediumForm"
import { ShowMedium } from "./Mediums"


export const Medium = () => {
    const [mediums, setMediums] = useState([])
    const [mediumPosts, setMediumPosts] = useState([])
    const [materialToEdit, setMediumToEdit] = useState({})
    const [editBox, setEditBox] = useState(false)

    useEffect(() => {
        getMediums().then(setMediums)
    }, [])

    useEffect(() => {
        getMediumPosts().then(setMediumPosts)
    }, [])




    
    return (
        <>
  
        <div className="container">
            <div id="edit-modal" className={editBox ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>

                <div className="modal-content">
                    <div className="box">
                        <MediumForm setMediums={setMediums} mediums={mediums}
                            materialToEdit={materialToEdit} setEditBox={setEditBox} />

                    </div>
                </div>

            </div>
            <h1 className="main-title">Materials</h1>
            <h2 className="title is-5">Current Listed Materials</h2>
             <div className="columns">
            
                
                <ShowMedium setMediums={setMediums} mediums={mediums} 
                    setMediumToEdit={setMediumToEdit} setEditBox={setEditBox}
                    setMediumPosts={setMediumPosts} mediumPosts={mediumPosts} />

                <div className="column is-one-third ml-6">
                    <MediumForm mediums={mediums} setMediums={setMediums} />
                </div>
            </div> 
        </div>
        </>
    )
}
