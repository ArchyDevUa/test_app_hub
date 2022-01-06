import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import Post from "./Post";
import {
  StyledPost,
  StyledPostTitle,
  StyledPostText,
  StyledTextArea,
  StyledInput,
  StyledButton
} from "..";

const ToBottom = styled.div`
  margin-top: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const PostsList = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPostText, setPostText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`);
  };

  function textHandleChange(event) {
    setEditTitle(event.target.value);
  }
  function titleHandleChange(event) {
    setPostText(event.target.value);
  }

  async function handlePostEdit(id, editedContent) {
    const { data: updatedPost } = await axios.put(`http://localhost:3001/posts/${id}`, { postText: editedContent })
    
    // console.log(data)
    setListOfPosts(listOfPosts.map(post => post.id === updatedPost.id ? updatedPost : post))
  }

  const EditPost = (id,title,text) => {
    setEditTitle(title);
    setPostText(text);
    if (editMode === null) {
      setEditMode(id);
    } else if (editMode !== id && editMode !== null) {
      setEditMode(id);
    }
  };

  return listOfPosts.map(post => <Post key={post.id} post={post} onEdit={handlePostEdit}/>)

  //  return listOfPosts.map((value, key) => {
  //         return editMode !== value.id ? (
  //               <StyledPost key={value.id}>
  //                 <StyledPostTitle> {value.title} </StyledPostTitle>
  //                 <StyledPostText> {value.postText} </StyledPostText>
  //                 <ToBottom>
  //                   <Delete
  //                     size="32px"
  //                     onClick={() => {
  //                       deletePost(value.id);
  //                     }}
  //                   />
  //                   <Edit
  //                     size="32px"
  //                     onClick={() => {
  //                       EditPost(value.id,value.title,value.postText);
  //                     }}
  //                   />
  //                 </ToBottom>
  //               </StyledPost>
  //             ) : 
  //             (
  //               <StyledPost key={value.id}>
  //                 <form onSubmit={handleSubmit}>
  //                 <div>Edit mode</div>
  //                 <StyledInput
  //                   value={editTitle}
  //                   onChange={textHandleChange}
  //                   placeholder={"Title"}
  //                 />
  //                 <StyledTextArea
  //                   value={editPostText}
  //                   onChange={titleHandleChange}
  //                   placeholder={"Text of the post"}
  //                 />
  //                 <ToBottom>
  //                   <StyledButton type="submit">Create a new Post</StyledButton>
  //                 </ToBottom>
  //                 </form>
  //               </StyledPost>
  //             )
  //       })
};

export default PostsList;
