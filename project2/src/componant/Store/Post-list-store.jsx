/*import { createContext, useReducer } from "react";
import React from 'react'
 export const DEFAULT_CONTEXT = {
  postList:[],
addPost:()=>{},
addInitialPosts:()=>{},
 deletPost:()=>{},
  
}

 export const PostList = createContext(DEFAULT_CONTEXT)
 const PostListReducer = (currPostList, action) => {
  let NewPostList = currPostList;

  if (action.type === "DELETE_POST") {
    NewPostList = currPostList.filter(Post => Post.Id !== action.payload.PostId);
  } else if(action.type === "ADD_Initial_POSTS"){
    NewPostList = action.payload.posts
  }else if(action.type === "ADD_POST"){
    NewPostList = [action.payload, ...currPostList]
  }
  return NewPostList;
};


//const PostListReducer = (currPostList , action)=>{
  //let NewPostList = currPostList
  //if(action.type === "DELETE_POST"){
   //NewPostList = currPostList.filter(Post =>Post.Id !== type.payload.PostId)
  //}
    //return NewPostList;
//};



const PostListProvider = ({children}) => {
const [postList,dispatchPostList]=useReducer(PostListReducer,[])

const addPost=(user,title,content,reaction,hashtag)=>{
  dispatchPostList({
    type:"ADD_POST",
    payload:{
    Id:Date.now(),
    Title:title,
    Body:content,
    Reaction:reaction,
    UserId:user,
    Tag:hashtag,
    },
  });
  


}
const addInitialPosts=(posts)=>{
  dispatchPostList({
    type:"ADD_Initial_POSTS",
    payload:{
    posts
    },
  });
  


}
const deletPost = (PostId)=>{
  dispatchPostList({
    type:"DELETE_POST",
    payload:{
      PostId
    },
  });

}
  return (
    
    <PostList.Provider value={{
        postList,
        addPost,
        addInitialPosts,
        deletPost,
    }}>
        {children}
    </PostList.Provider>  
    
  )
};


     

export  default PostListProvider*/
import React, { createContext, useReducer } from 'react';
//import React from 'react'

export const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletPost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const PostListReducer = (currPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostList.filter(post => post.Id !== action.payload.PostId);
    case 'ADD_Initial_POSTS':
      return [...action.payload.posts];
    case 'ADD_POST':
      return [action.payload, ...currPostList];
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (user, title, content, reaction, hashtag) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        Id: Date.now(),
        Title: title,
        Body: content,
        Reaction: reaction,
        UserId: user,
        Tag: hashtag,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: 'ADD_Initial_POSTS',
      payload: {
        posts,
      },
    });
  };

  const deletPost = (PostId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        PostId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletPost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
