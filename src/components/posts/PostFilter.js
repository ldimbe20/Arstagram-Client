import {  getPostByTitle } from "./PostManager"
import React, { useEffect, useState } from "react"


export const PostFilter=()=>{
    const[post, setPost] = useState({})

//needs to have state that collects date or renrenders page

    useEffect(() => {
        if(post.searchTerms !== "") {
            getPostByTitle(post.searchTerms)
                .then(setPost)
        } 
    }, [post])



    return(
        <>
          <div className="panel m-5">
            <p className="panel-heading">Posts</p>
            <div className="panel-block">
                        <input className="input" type="text"
                            placeholder="Search by Title"
                            name="search"
                            onKeyUp={
                                (event) => {
                                    const copy = Object.assign({}, post)
                                    copy.categoryId = "0"
                                    copy.authorId = "0"
                                    copy.searchTerms = event.target.value
                                    copy.tagId = "0"
                                    setPost(copy)
                                }
                            } />
                    </div>
                </div>
        
        </>
    )






}
//make export of post filters

//gather all posts

//