import React, { useState } from "react";
import { PostsList } from "../../components";
import axios from "axios";
import {
  StyledButton,
  StyledTextArea,
  StyledTitle,
  StyledWrapper,
} from "../../components";

const Home = () => {
  const [value, setValue] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { value, userName: "user" };
    const response = await axios.post("http://localhost:3001/posts", data);
    setListOfPosts([...listOfPosts,response.data]);
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  async function deletePost(id) {
    const response = await axios.delete(`http://localhost:3001/posts/${id}`);
    if (response.status === 200) {
      setListOfPosts(listOfPosts.filter((post) => post.id !== id));
    } else {
      console.log("failed to delete post");
    }
  }

  async function handlePostEdit(id, { editableValue}) {
    const { data: updatedPost } = await axios.put(
      `http://localhost:3001/posts/${id}`,
      { value: editableValue}
    );
    setListOfPosts(
      listOfPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  }

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        You are on the Home page
        <StyledTitle>Add new Post</StyledTitle>
        <StyledTextArea
          value={value}
          onChange={handleChange}
          placeholder={"Text of the post"}
          height={"80px"}
        />
        <StyledButton type="submit">Create a new Post</StyledButton>
      </form>
      <PostsList
        listOfPosts={listOfPosts}
        setListOfPosts={setListOfPosts}
        deletePost={deletePost}
        handlePostEdit={handlePostEdit}
      />
    </StyledWrapper>
  );
};

export default Home;
