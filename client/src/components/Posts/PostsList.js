import React,{useEffect} from "react";
import axios from "axios";

import Post from "./Post";

const PostsList = ({listOfPosts,setListOfPosts,deletePost,handlePostEdit}) => {
  
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);


  return listOfPosts.map((post) => (
    <Post
      key={post.id}
      post={post}
      onEdit={handlePostEdit}
      onDelete={deletePost}
    />
  ));
};

export default PostsList;
