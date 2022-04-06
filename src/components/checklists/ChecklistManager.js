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