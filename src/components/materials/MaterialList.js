// import { useEffect, useState } from "react"
// import { getMaterials } from "./MaterialsManager"
// import { MaterialsForm } from "./MaterialsForm"
// import { ShowMaterials } from "./Materials"

// export const Materials = () => {
//     const [materials, setMaterials] = useState([])
//     const [materialToEdit, setMaterialsToEdit] = useState({})
//     const [editBox, setEditBox] = useState(false)

//     useEffect(() => {
//         getMaterials().then(setMaterials)
//     }, [])


//     // above is getting the materials state...this state will also be used in other modules as props.


//     return (
//         <>
//             <div id="edit-modal" className={editBox ? "modal is-active" : "modal"}>
//                 <div className="modal-background"></div>

//                 <div className="modal-content">
//                     <div className="box">
//                         <MaterialForm setMaterials={setMaterials} materials={materials}
//                             materialToEdit={materialToEdit} setEditBox={setEditBox} />
//                     </div>
// {/* above is importing the materialForm jsx to render in this view. It is also setting up the props to equal the state on line 10-12 */}
//                 </div>

//             </div>
//             <h1 className="title is-1 is-success">Materials</h1>
//             <div className="columns is-centered">
                
//                 <ShowMaterials materials={materials} setMaterials={setMaterials}

// {/* above is importing the materials jsx to render in this view. It is also setting up the props to equal the state on line 10-12 */}
//                     setMaterialsToEdit={setMaterialsToEdit} setEditBox={setEditBox} />
//                 <div className="column is-one-third ml-6">
//                     <MaterialsForm materials={materials} setMaterials={setMaterials} />
// {/* above is importing the materialsForm jsx to render in this view. It is also setting up the props to equal the state on line 10-12 */}
//                 </div>
//             </div>
//         </>
//     )
// }
