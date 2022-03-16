export const getMediums = () => {
	return fetch("http://localhost:8000/mediums", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}


  export const deleteMedium = mediumsId => {
    return fetch(`http://localhost:8000/${mediumsId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_token")}`
        }
    })
    
};

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

export const updateMediums = (mediums, id) => {
    return fetch(`http://localhost:8000/mediums/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mediums)
    })
        .then(getMediums)
}

