import { useState } from "react";
import { StyledPost, StyledTextArea, StyledButton } from "..";

function PostEditForm({ value, onConfirm }) {
  const [editableValue, setEditableValue] = useState(value);

  return (
    <StyledPost>
      <div>Edit Mode</div>
      <StyledTextArea
        value={editableValue}
        onChange={(e) => setEditableValue(e.target.value)}
        width={"240px"}
      ></StyledTextArea>
      <StyledButton
        onClick={() => onConfirm({ editableValue})}
      >
        Save
      </StyledButton>
    </StyledPost>
  );
}

export default PostEditForm;
