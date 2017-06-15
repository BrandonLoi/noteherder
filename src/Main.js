import React from 'react'

import './Main.css'
import SideBar from './Sidebar.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm.js'


const Main = (props) => {
  return (
    <div className="Main">
      <SideBar />
      <NoteList notes={props.notes}/>
      <NoteForm />
    </div>
  )
}

export default Main
