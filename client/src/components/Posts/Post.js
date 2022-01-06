import {useState} from 'react'
import PostEditForm from './PostEditForm'

function Post({ post, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false)

  const handlePostEdit = (editedContent) => {
    onEdit(post.id, editedContent)
    setEditMode(false)
  }

  const displayedContent = editMode ? <PostEditForm value={post.postText} onConfirm={handlePostEdit}/> : post.postText

  return (
    <div>
      {displayedContent}

      <button onClick={() => setEditMode(true)}>Edit</button>
    </div>
  )
}

export default Post;