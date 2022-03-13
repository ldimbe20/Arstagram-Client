export const getMediums = () => {
	return fetch("http://localhost:8000/mediums", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const deleteMedium = mediumsId => {
    return fetch(`http://localhost:8000/${mediumsId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_token")}`
        }
    })
    
};

export const createMediums = categories => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categories)
    })
        .then(getCategories)
}

export const updateMediums = (mediums, id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mediums)
    })
        .then(getCategories)
}

