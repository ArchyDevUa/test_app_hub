import {useState} from 'react'
import PostEditForm from './PostEditForm';
import PostContent from './PostContent';
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Edit } from "@styled-icons/boxicons-regular/Edit";

function Post({ post, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);

  const handlePostEdit = (editedContent) => {
    onEdit(post.id, editedContent);
    setEditMode(false);
  };

  const displayedContent = editMode ? (
    <PostEditForm value={post.value} onConfirm={handlePostEdit} />
  ) : (
    <PostContent value={post.value} />
  );

  return (
    <div>
      {/* //Post header */}
      {displayedContent}
      {/* { add to post Header */}
      <Delete
        size="32px"
        onClick={() => {
          onDelete(post.id);
        }}
      />
      <Edit size="32px" onClick={() => setEditMode(true)} />
    </div>
  );
}

export default Post;