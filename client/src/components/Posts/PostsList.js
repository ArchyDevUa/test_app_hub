import React,{useEffect} from "react";
import axios from "axios";

import Post from "./Post";

const PostsList = ({listOfPosts,setListOfPosts}) => {
  
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  async function deletePost(id) {
    const response = await axios.delete(`http://localhost:3001/posts/${id}`);
    if (response.status === 200) {
      setListOfPosts(listOfPosts.filter((post) => post.id !== id));
    } else {
      console.log("failed to delete post");
    }
  }

  async function handlePostEdit(id, { editableTextValue, editableTitleValue }) {
    const { data: updatedPost } = await axios.put(
      `http://localhost:3001/posts/${id}`,
      { postText: editableTextValue, title: editableTitleValue }
    );
    setListOfPosts(
      listOfPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  }

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
