import React from 'react'

const Themes = (prop) => {
  return (
    <div>
          <button className='btn' onClick={prop.onclick}>Set Theme</button>
          <p>This is my first theme project</p>
    </div>
  )
}

export default Themes
