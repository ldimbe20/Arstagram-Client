import React from "react"
import { Route } from "react-router-dom"
import {PrivatePostList} from "./posts/PrivatePost"
import { ShowCategories } from "./categories/Categories"
import { ShowMaterials } from "./mediums/Mediums"
import { PostList } from "./posts/SharedPost"
import { PostForm } from "./posts/CreatePost"
import { CommentForm } from "./comments/CommentForm"


import { CommentList } from "./comments/CommentList"

export const ApplicationViews = () => {
	return (
		<>
			<Route exact path='/posts'>
				{/* parent */}
				<PostList />
			</Route>
			<Route exact path='/private_posts'>
				{/* child */}
				<PrivatePostList />
			</Route>
			{/* when the url is posts, display postId- capturing after : and storing */}
			{/* postId is the key post component! */}

			
			<Route exact path='/categories'>
				{/* child */}
				<ShowCategories />
			</Route>
			
			<Route exact path='/createPost'>
				<PostForm />
			</Route>

			<Route exact path='/comments/:postId(\d+)'>
				<CommentForm />
			</Route>
		</>
	)
}
