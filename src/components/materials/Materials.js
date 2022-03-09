// import {  getMaterials, deleteMaterial, } from "./MaterialsManager"

// export const ShowMaterials = ({ materials, setMaterials }) => {
//     return (
//         <div className="column is-one-quarter mr-6">

//             {
//                 materials.map(
//                     (material) => {
//                         return <div className="notification is-success p-3 has-text-weight-medium" key={`material--${material.id}`}>
//                             <button className="delete is-info" onClick={() => { 
//                                 deleteMaterial(material.id).then((res)=>{
//                                     if (res.status === 304){
//                                         window.alert("This material is already in use and cannot be deleted")
//                                     }

//                                 }).then(getMaterials)
//                                     .then(setMaterials)
//                             }}></button>
//                             <div className="level-left">

//                                 <div className="level-item">
//                                     <button className="button m-1" onClick={() => {
//                                     setMaterialToEdit(material)
//                                     setModalIsOpen(true)
//                                 }}>Edit</button>
//                                 </div>
//                                 <div className="level-item px-5">

//                                     {material.label}
//                                 </div>
//                             </div>

//                         // </div>
//                     }
//                 )
//             }

//         </div>
//     )
// }