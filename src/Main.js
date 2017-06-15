import React from 'react'

import './Main.css'
import SideBar from './Sidebar.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm.js'


const Main = () => {
  return (
    <div className="Main">
      <SideBar />
      <NoteList />
      <NoteForm />
    </div>
  )
}

export default Main
