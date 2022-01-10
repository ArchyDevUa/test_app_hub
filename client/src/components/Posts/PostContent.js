import React from "react";
import { StyledPost, StyledPostTitle, StyledPostText } from "..";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Edit } from "@styled-icons/boxicons-regular/Edit";

const PostContent = ({ post, onDelete ,onEditMode}) => {
  return (
    <StyledPost>
      <StyledPostTitle>{post.title}</StyledPostTitle>
      <StyledPostText>{post.postText}</StyledPostText>
      <Delete
        size="32px"
        onClick={() => {
          onDelete(post.id);
        }}
      />
      <Edit
        size="32px"
        onClick={() => onEditMode(true)}
      />
    </StyledPost>
  );
};

export default PostContent;
