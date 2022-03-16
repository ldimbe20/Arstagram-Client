import {  getMediums, deleteMedium, } from "./MediumsManager"


export const ShowMedium = ({ mediums, setMediums, setMediumToEdit, setEditBox }) => {
    // const [mediums, setMediums] = useState([])
    //  useEffect(() => {
    //     getMediums().then(setMediums)
    // }, [])

    return (
        <div className="column is-one-quarter mr-6">

            {
                
                mediums.map(
                    (medium) => {
                        return <div className="notification is-success p-3 has-text-weight-medium" key={`medium--${medium.id}`}>
                            {/* <button className="delete is-info" onClick={() => { 
                                deleteMedium(medium.id).then((res)=>{
                                    if (res.status === 304){
                                        window.alert("This medium is already in use and cannot be deleted")
                                    }

                                }).then(getMediums)
                                    .then(setMediums)
                            }}></button> */}
                            <div className="level-left">

                                <div className="level-item px-5">

                                    {medium.name}
                                </div>
                            </div>

                         </div>
                    }
                )
            }

        </div>
    )
}