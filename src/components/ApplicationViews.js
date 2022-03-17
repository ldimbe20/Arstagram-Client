import React from "react"
import { Route } from "react-router-dom"
import {ShowPrivatePost} from "./posts/PrivatePost"
import { ShowPost } from "./posts/SharedPost"
import { PostForm } from "./posts/CreatePost"
import { UpdatePost } from "./posts/UpdatePost"
import { CommentForm } from "./comments/CommentForm"
import { Medium } from "./mediums/MediumsList"
import { Resource } from "./resource/Resource"


import { CommentList } from "./comments/CommentList"

export const ApplicationViews = () => {
	return (
		<>
			<Route exact path='/posts'>
				{/* parent */}
				<ShowPost />
			</Route>


			<Route exact path='/private_posts'>
				{/* child */}
				<ShowPrivatePost />
			</Route>
			{/* when the url is posts, display postId- capturing after : and storing */}
			{/* postId is the key post component! */}

			
			<Route exact path='/mediums'>
				{/* child */}
				<Medium />
			</Route>

			<Route exact path='/resources'>
				{/* child */}
				<Resource />
			</Route>
			
			<Route exact path='/createPost'>
				<PostForm />
			</Route>

			<Route exact path='/posts/:postId(\d+)/update'>
				<UpdatePost />
			</Route>

			<Route exact path='/comments/:postId(\d+)'>
				<CommentForm />
			</Route>

			<Route exact path='/posts/:postId(\d+)'>
				<CommentList />
			</Route>

			
		</>
	)
}

