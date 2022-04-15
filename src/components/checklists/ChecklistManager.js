export const getChecklists = () => {
	return fetch("http://localhost:8000/checklists", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const deleteChecklist = (checklistId) => {
    return fetch(`http://localhost:8000/checklists/${checklistId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    
};



export const createChecklist = (checklist) => {
	return fetch("http://localhost:8000/checklists", {
		// fetch returns a promise
		method: "POST",
		headers: {
			"Authorization": `Token ${localStorage.getItem("token")}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(checklist)

	})
		.then(res => res.json())
}
