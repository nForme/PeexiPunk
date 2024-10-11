import './styles/App.css'
import './styles/Responsive.scss'
import TopNewsBlock from './components/TopNewsBlock/TopNewsBlock'

import NewsList from './components/NewsList/NewsList'
// import React from 'react'


function App() {

  return (
    <div className='main-container'>
      <TopNewsBlock/>
      <NewsList/> 
    </div>
  )
}

export default App
