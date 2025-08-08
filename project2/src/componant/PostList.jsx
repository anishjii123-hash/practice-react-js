/*import React, { useContext } from 'react'
import Card from './CreateList'
import { PostListContext } from './Store/Post-list-store';
//import {PostList as PostListData} from './Store/Post-list-store';
import WellcomeMessage from './WellcomeMessage';

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);

 // const{postList,addInitialPosts} = useContext(PostListData);
  const handelGetPostFromServer = ()=>{
   fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data=>{
  addInitialPosts(data.posts);
  });
  };
  
  return (
    <>
    {
      postList.length === 0 && <WellcomeMessage OnGetPostFromServer={handelGetPostFromServer}/>
    }
    {postList.map((post)=>(< Card key ={post.Id} Post={post} /> ))}
     {/*Card.Id*///}
    //</>
 // )
 // }

//export default PostList*/
import React, { useContext,useState } from 'react';
import Card from './CreateList';
import { PostListContext } from './Store/Post-list-store';
import WellcomeMessage from './WellcomeMessage';
import Spiner from './Spiner';

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [feching , setfeching] = useState(false);
 
  const handleGetPostFromServer =() => {
    setfeching(true)
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
        setfeching(false);

      })
    
      
  }
  return (
    <>
    {feching && <Spiner/>}
      {!feching && postList.length === 0 && <WellcomeMessage OnGetPostFromServer={handleGetPostFromServer} />}
      
      {!feching && postList.map((post) => (
  <Card key={post.id || post.Id} Post={post} />
))}

    </>
  );
};

export default PostList;

