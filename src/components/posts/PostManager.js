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



  export const getPostByTitle = (searchTerm) => {
    return fetch(`http://localhost:8000/posts?q=${searchTerm}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  }  

  export const getPostByCategory = (category_id) => {
    return fetch(`http://localhost:8000/posts?category_id=${category_id}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
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
