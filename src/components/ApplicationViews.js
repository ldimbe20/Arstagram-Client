import React from "react"
import { Route } from "react-router-dom"
import {PrivatePostList} from "./posts/PrivatePost"
import { ShowCategories } from "./categories/Categories"
import { ShowMaterials } from "./materials/Materials"
import { PostList } from "./posts/SharedPost"
import { PostForm } from "./posts/CreatePost"
import { ShowTags } from "./tags/Tag"
import { CommentForm } from "./comments/CommentForm"
import { UpdatePost } from "./posts/UpdatePost"

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

			<Route exact path='/posts/:postId(\d+)/update'>
				<UpdatePost />
			</Route>
			<Route exact path='/categories'>
				{/* child */}
				<ShowCategories />
			</Route>
			<Route exact path='/materials'>
				{/* child */}
				<ShowMaterials />
			</Route>
			<Route exact path='/createPost'>
				<PostForm />
			</Route>
			<Route exact path='/tags'>
				<ShowTags />
			</Route>

			<Route exact path='/comments/:postId(\d+)'>
				<CommentForm />
			</Route>
		</>
	)
}
