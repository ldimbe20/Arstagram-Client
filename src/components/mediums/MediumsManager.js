export const getMediums = () => {
	return fetch("http://localhost:8000/mediums", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}




export const createMedium = mediums => {
    return fetch("http://localhost:8000/mediums", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mediums)
    })
        .then(getMediums)
}



export const deleteMedium = (mediumId) => {
    return fetch(`http://localhost:8000/mediums/${mediumId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    
};