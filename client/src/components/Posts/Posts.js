import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Delete} from '@styled-icons/fluentui-system-filled/Delete';
import {Edit} from '@styled-icons/boxicons-regular/Edit';

const Post = styled.div`
  width: 600px;
  min-height:100%;
  position:relative;
  margin: 20px auto 0px;
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 3px;
  
`;
const PostTitle = styled.div`
  font-size: 1.3rem;
  padding: 5px 0px;
  align-self: flex-end;
`;
const PostText = styled.div`
  font-size: 1rem;
  text-align: left;
  padding: 5px ;
  word-wrap: break-word;
  word-break: break-all;
`;

const ToBottom = styled.div`
  margin-top: 50px;
  &:hover {
    cursor: pointer;
  }
`




const Posts = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, [listOfPosts]);

  const deletePost = (id) => {
     axios.delete(`http://localhost:3001/posts/${id}`)
  }
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <Post key={key}>
            <PostTitle> {value.title} </PostTitle>
            <PostText> {value.postText} </PostText>
            <ToBottom>
              <Delete size="32px" onClick = { () => {deletePost(value.id)}}/>
              <Edit size="32px"/>
            </ToBottom>
          </Post>
        );
      })}
    </div>
  );
};

export default Posts;
