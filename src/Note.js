import React from 'react'

import './Note.css'

const Note = (props) => {
  const customDelete = (ev) => {
    props.deleteNote(props.note)
  }
  return (
    <li>
      <div className="note">
        <div className="note-title">
          {props.note.title}
        </div>
        <div className="note-body">
          <p>
            {props.note.body}
          </p>
        </div>
        <div>
          <button onClick={customDelete}>Delete</button>
        </div>
      </div>
    </li>
  )
}

export default Note
