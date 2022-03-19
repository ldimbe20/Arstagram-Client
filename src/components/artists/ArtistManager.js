export const getCurrentUser = () => {
	return fetch("http://localhost:8000/artists/current", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const getUser = () => {
	return fetch("http://localhost:8000/artists", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }



