export const getChecklists = () => {
	return fetch("http://localhost:8000/checklists", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}