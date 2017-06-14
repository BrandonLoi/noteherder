import React from 'react'
import './Sidebar.css'

import quill from './quill.svg'

const SideBar = () => {
  return (
    <div className="Sidebar">
    <nav class="Nav">
      <div class="logo">
        <img src={quill} alt="Noteherder"/>
      </div>
      <button class="new-note">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note"/>
        <img class="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note"/>
      </button>
    </nav>

    </div>
  )
}

export default SideBar
