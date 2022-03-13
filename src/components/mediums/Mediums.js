import {  getMediums, deleteMedium, } from "./MediumsManager"

export const ShowMedium = ({ mediums, setMediums, setMediumToEdit, setEditBox }) => {

    
    return (
        <div className="column is-one-quarter mr-6">

            {
                mediums.map(
                    (medium) => {
                        return <div className="notification is-success p-3 has-text-weight-medium" key={`medium--${medium.id}`}>
                            <button className="delete is-info" onClick={() => { 
                                deleteMedium(medium.id).then((res)=>{
                                    if (res.status === 304){
                                        window.alert("This medium is already in use and cannot be deleted")
                                    }

                                }).then(getMediums)
                                    .then(setMediums)
                            }}></button>
                            <div className="level-left">

                                <div className="level-item">
                                    <button className="button m-1" onClick={() => {
                                    setMediumToEdit(medium)
                                    setEditBox(true)
                                }}>Edit</button>
                                </div>
                                <div className="level-item px-5">

                                    {medium.label}
                                </div>
                            </div>

                        // </div>
                    }
                )
            }

        </div>
    )
}