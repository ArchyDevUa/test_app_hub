import {useState} from 'react'
import PostEditForm from './PostEditForm';
import PostContent from './PostContent';

function Post({ post, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false)

  const handlePostEdit = (editedContent) => {
    onEdit(post.id, editedContent)
    setEditMode(false)
  }

  const displayedContent = editMode ? (
    <PostEditForm titleValue={post.title} textValue={post.postText} onConfirm={handlePostEdit} />
  ) : (
    <PostContent post={post} onDelete={onDelete} onEditMode={setEditMode} />
  );
  
  return (
    <div>
      {displayedContent}
      {/* ask  <button onClick={() => setEditMode(true)}>Edit</button> */}
    </div>
  )
}

export default Post;