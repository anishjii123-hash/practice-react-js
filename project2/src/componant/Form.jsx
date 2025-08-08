/*import React, { useContext } from 'react'
import { useRef } from 'react';
//import {PostList} from './Store/Post-list-store';
//import { PostList } from '../componant/Store/Post-list-store';
import { PostListContext } from '../componant/Store/Post-list-store';


const Form = () => {
  const { addPost } = useContext(PostListContext);

   //const {addPost}=useContext(PostList)

  const userElement = useRef();
   const titleElement = useRef();
    const contentElement = useRef();
     const reactionElement = useRef();
      const hashtagElement = useRef();

      const HandelSubmit = (e)=>{
        e.preventDefault();
        const user = userElement.current.value;
        const title = titleElement.current.value;
        const content = contentElement.current.value;
        const reaction = reactionElement.current.value;
        const hashtag = hashtagElement.current.value.split(" ") ;
        addPost(user,title,content,reaction,hashtag);

         userElement.current.value="";
         titleElement.current.value="";
         contentElement.current.value="";
         reactionElement.current.value="";
          hashtagElement.current.value="";
      };
  return (
    <div>
      <form className='w-100 ml-10 mt-10' onSubmit={HandelSubmit}>
         <div className="mb-3">
    <label htmlFor="user id" className="form-label">User Id</label>
    <input type="text" className="form-control" id="User id" ref={userElement} placeholder="Your user id..."aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" ref={titleElement} placeholder="How are you feeling today..."aria-describedby="emailHelp"/>
  </div>
   <div className="mb-3">
    <label htmlFor="Body" className="form-label">Post Content</label>
    <textarea rows="4" type="text" className="form-control" id="body" ref={contentElement} placeholder="let me content..."aria-describedby="emailHelp"/>
  </div>
   <div className="mb-3">
    <label htmlFor="reaction" className="form-label">No. of Reaction</label>
    <input type="text" className="form-control" id="reaction" ref={reactionElement}  placeholder="How many people reacted this post..."aria-describedby="emailHelp"/>
  </div>
    <div className="mb-3">
    <label htmlFor="tag" className="form-label">Enter Hashtag here...</label>
    <input type="text" className="form-control" id="reaction" ref={hashtagElement} placeholder="Favorite your hashtag..."aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </div>
  )
}

export default Form*/
import React, { useContext, useRef } from 'react';
import { PostListContext } from '../componant/Store/Post-list-store';

const Form = () => {
  const { addPost } = useContext(PostListContext);

  const userElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();
  const hashtagElement = useRef();

  const HandelSubmit = (e) => {
    e.preventDefault();

    const user = userElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reaction = reactionElement.current.value;
    const hashtag = hashtagElement.current.value.split(' ');

    addPost(user, title, content, reaction, hashtag);

    userElement.current.value = '';
    titleElement.current.value = '';
    contentElement.current.value = '';
    reactionElement.current.value = '';
    hashtagElement.current.value = '';
  };

  return (
    <div>
      <form className="w-100 ml-10 mt-10" onSubmit={HandelSubmit}>
        <div className="mb-3">
          <label htmlFor="user id" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="User id"
            ref={userElement}
            placeholder="Your user id..."
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleElement}
            placeholder="How are you feeling today..."
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Body" className="form-label">
            Post Content
          </label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="body"
            ref={contentElement}
            placeholder="let me content..."
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            No. of Reaction
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            ref={reactionElement}
            placeholder="How many people reacted this post..."
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Enter Hashtag here...
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            ref={hashtagElement}
            placeholder="Favorite your hashtag..."
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default Form;
