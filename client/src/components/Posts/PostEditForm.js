import { useState } from "react";
import { StyledPost, StyledInput, StyledTextArea, StyledButton } from "..";

function PostEditForm({ textValue, titleValue, onConfirm }) {
  const [editableTextValue, setEditableTextValue] = useState(textValue);
  const [editableTitleValue, setEditableTitleValue] = useState(titleValue);

  return (
    <StyledPost>
      <div>Edit Mode</div>
      <StyledInput
        value={editableTitleValue}
        width={"240px"}
        onChange={(e) => setEditableTitleValue(e.target.value)}
      ></StyledInput>
      <StyledTextArea
        value={editableTextValue}
        onChange={(e) => setEditableTextValue(e.target.value)}
        width={"240px"}
      ></StyledTextArea>
      <StyledButton
        onClick={() => onConfirm({ editableTextValue, editableTitleValue })}
      >
        Save
      </StyledButton>
    </StyledPost>
  );
}

export default PostEditForm;
