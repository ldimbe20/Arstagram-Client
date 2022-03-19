export const getPosts = () => {
	return fetch("http://localhost:8000/posts", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}


export const createPost = (post) => {
	return fetch("http://localhost:8000/posts", {
		method: "POST",
		headers: {
			"Authorization": `Token ${localStorage.getItem("token")}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(post)

	})
		.then(res => res.json())
}


export const deletePost = (postId) => {
	return fetch(`http://localhost:8000/posts/${postId}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }




  
  export const updatePost = (postId, post) => {
	return fetch(`http://localhost:8000/posts/${postId}`, {
	  method: "PUT",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(post)
	})
  }


  export const postById = (postId) => {
	return fetch(`http://localhost:8000/posts/${postId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}


export const postByMood = (moodId) => {
	return fetch(`http://localhost:8000/posts?mood_id=${moodId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const postByUser = (userId) => {
	return fetch(`http://localhost:8000/posts?user_id=${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}







