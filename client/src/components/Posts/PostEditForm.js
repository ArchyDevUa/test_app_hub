import {useState} from 'react'

function PostEditForm({ value, onConfirm }) {
  const [editableValue, setEditableValue] = useState(value)

  return (
    <div>
      <input value={editableValue} onChange={e => setEditableValue(e.target.value)}></input>
      <button onClick={() => onConfirm(editableValue)}>Save</button>
    </div>
  )
}

export default PostEditForm