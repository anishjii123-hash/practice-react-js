/*import React, { useContext } from 'react'
import { PostList } from './Store/Post-list-store';
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";


const CreateList = ({Posts}) => {
  const{ deletPost}=useContext(PostList)
  return (
    <div>
      <div className="card m-[20px] " style={{width:"30rem"}}>
  <img src="https://www.bing.com/th/id/OIP.voPFrmZiD0w_rcdVDa-7WQHaEg?w=260&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..."/>
  <span className="card-body bg-amber-300 ">
    <h5 className="card-title">{posts.title}
       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger flex flex-between ">
    <IoEyeSharp />{posts.reactions}
  
  </span>
    </h5>
    <p className="card-text">{posts.body}</p>
    {posts.Tag.map((tags)=>(<span key={tags} className="badge text-bg-primary m-0.5">{tags}</span>))}
    <div className='hover:text-2xl mx-105 mt-2 '>
     <span onClick={()=>deletPost(posts.id)}> <AiOutlineDelete />
     </span>
</div>
</span>
  </div>
</div>
    
  )
}

export default CreateList*/
/*import React, { useContext } from 'react';
import { PostList } from './Store/Post-list-store';
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const CreateList = ({ Post }) => {
  const { deletPost } = useContext(PostList);

  return (
    <div>
      <div className="card m-[20px]" style={{ width: "30rem" }}>
        <img
          src="https://www.bing.com/th/id/OIP.voPFrmZiD0w_rcdVDa-7WQHaEg?w=260&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-amber-300">
          <h5 className="card-title">
            {Post.Title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger flex flex-between">
              <IoEyeSharp /> {Post.Reaction}
            </span>
          </h5>
          <p className="card-text">{Post.Body}</p>

          {Post.Tag.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-0.5">
              {tag}
            </span>
          ))}

          <div className="hover:text-2xl mx-105 mt-2">
            <span onClick={() => deletPost(Post.Id)}>
              <AiOutlineDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateList;*/
/*import React, { useContext } from 'react';
import { PostListContext } from './Store/Post-list-store';
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const CreateList = ({ Post }) => {
  const { deletPost } = useContext(PostListContext);

  return (
    <div>
      <div className="card m-[20px]" style={{ width: "30rem" }}>
        <img
          src="https://www.bing.com/th/id/OIP.voPFrmZiD0w_rcdVDa-7WQHaEg?w=260&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-amber-300">
          <h5 className="card-title">
            {Post.Title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger flex flex-between">
              <IoEyeSharp /> {Post.Reaction}
            </span>
          </h5>
          <p className="card-text">{Post.Body}</p>

          {Post.Tag.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-0.5">
              {tag}
            </span>
          ))}

          <div className="hover:text-2xl mx-105 mt-2">
            <span onClick={() => deletPost(Post.Id)}>
              <AiOutlineDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateList;*/
import React, { useContext } from 'react';
import { PostListContext } from './Store/Post-list-store';
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

const CreateList = ({ Post }) => {
  const { deletPost } = useContext(PostListContext);

  const postId = Post.id || Post.Id;
  const title = Post.title || Post.Title;
  const body = Post.body || Post.Body;
  const tags = Post.tags || Post.Tag || [];
  const reactions = Post.reactions || Post.Reaction || {};

  return (
    <div>
      <div className="card m-[20px]" style={{ width: "30rem" }}>
        <img
          src="https://www.bing.com/th/id/OIP.voPFrmZiD0w_rcdVDa-7WQHaEg?w=260&h=211"
          className="card-img-top"
          alt="Post visual"
        />
        <div className="card-body bg-amber-300">
          <h5 className="card-title">
            {title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger flex flex-between">
              <IoEyeSharp /> 
              {typeof reactions === 'object' 
                ? `👍 ${reactions.likes || 0} 👎 ${reactions.dislikes || 0}` 
                : reactions}
            </span>
          </h5>
          <p className="card-text">{body}</p>

          {tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary m-0.5">
              {typeof tag === 'string' ? tag : JSON.stringify(tag)}
            </span>
          ))}

          <div className="hover:text-2xl mx-105 mt-2">
            <span onClick={() => deletPost(postId)}>
              <AiOutlineDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateList;


