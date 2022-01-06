import React, { useState } from "react";
import { Posts } from "../../components";
import axios from "axios";
import { StyledButton, StyledInput, StyledTextArea 
  , StyledTitle, StyledWrapper} from "../../components";


const Home = () => {
  const [title, setTitle] = useState("");
  const [postText, setText] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    const data = {title,postText,userName:"user"};
    axios.post("http://localhost:3001/posts", data).then((response) => {
      setTitle("");
      setText("");
    })
  }

  function textHandleChange(event) {
    setTitle(event.target.value);
  }

  function titleHandleChange(event) {
    setText(event.target.value);
  }

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        You are on the Home page
        <StyledTitle>Add new Post</StyledTitle>
        <StyledInput
          value={title}
          onChange={textHandleChange}
          placeholder={"Title"}
          height={"20px"}
        />
        <StyledTextArea
          value={postText}
          onChange={titleHandleChange}
          placeholder={"Text of the post"}
          height={"80px"}
        />
        <StyledButton type="submit">Create a new Post</StyledButton>
      </form>
      <Posts />
    </StyledWrapper>
  );
};

export default Home;
