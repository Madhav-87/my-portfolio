import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='header-div'>
          <div className='header-box-20'>
            <div className='profile-icon'>
              M
            </div>
            <div><h3>Madhav</h3></div>
          </div>
          <div className='header-box-50'>
            <div className='nav-items active-item'>Home</div>
            <div className='nav-items'>Projects</div>
            <div className='nav-items'>Experience</div>
            <div className='nav-items'>Contact</div>
          </div>
          <div className='header-box-20'>
            <div className='download-resume-btn'>
              <span className="material-symbols-outlined">
              download
            </span>
            <span className=''>
              Resume
            </span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
