export const getMediums = () => {
	return fetch("http://localhost:8000/mediums", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

//   export const deleteMaterial = materialId => {
//     return fetch(`http://localhost:8000/${materialId}`, {
//         method: "DELETE",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("rare_token")}`
//         }
//     })
    
// };

// export const createMaterial = categories => {
//     return fetch("http://localhost:8000/categories", {
//         method: "POST",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("rare_token")}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(categories)
//     })
//         .then(getCategories)
// }

// export const updateMaterial = (material, id) => {
//     return fetch(`http://localhost:8000/categories/${id}`, {
//         method: "PUT",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("rare_token")}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(material)
//     })
//         .then(getCategories)
// }

// export const deleteMaterial = materialId => {
//     return fetch(`http://localhost:8000/categories/${materialId}`, {
//         method: "DELETE",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("rare_token")}`
//         }
//     })
    
// };