import React, { useState } from "react";
import styled from "styled-components";
import { Posts } from "../../components";
import axios from "axios";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.5em;
`;
const Title = styled.h2`
  font-size: 2.5em;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 5px auto;
  border-radius: 3px;
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "400px"};
  display: block;
`;

const TextArea = styled.textarea`
  padding: 0.5em;
  margin: 0px auto;
  border-radius: 3px;
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "402px"};
  display: block;
`;

const Button = styled.button`
  margin: 10px auto;
  font-size: 1rem;
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "100px"};
`;




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
    <Wrapper>
      <form onSubmit={handleSubmit}>
        You are on the Home page
        <Title>Add new Post</Title>
        <Input
          value={title}
          onChange={textHandleChange}
          placeholder={"Title"}
          height={"20px"}
        />
        <TextArea
          value={postText}
          onChange={titleHandleChange}
          placeholder={"Text of the post"}
          height={"80px"}
        />
        <Button type="submit">Create a new Post</Button>
      </form>
      <Posts />
    </Wrapper>
  );
};

export default Home;
