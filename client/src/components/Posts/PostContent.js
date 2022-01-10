import React from "react";
import { StyledPost, StyledPostText } from "..";


const PostContent = ({ value}) => {
  return (
    <StyledPost>
      <StyledPostText>{value}</StyledPostText>
    </StyledPost>
  );
};

export default PostContent;
