export const getMoods = () => {
	return fetch("http://localhost:8000/moods", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }