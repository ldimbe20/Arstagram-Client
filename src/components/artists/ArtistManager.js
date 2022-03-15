export const getCurrentUser = () => {
	return fetch("http://localhost:8000/artists/current", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }



