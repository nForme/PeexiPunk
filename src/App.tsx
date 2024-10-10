import './styles/App.css'
import './styles/Responsive.css'
import TopNewsBlock from './components/TopNewsBlock/TopNewsBlock'
import Filter from './components/Filter/Filter'
import NewsList from './components/NewsList/NewsList'
// import React from 'react'

function App() {

  return (
    <div className='main-container'>
      <TopNewsBlock/>
      <Filter/>
      <NewsList/> 
    </div>
  )
}

export default App
