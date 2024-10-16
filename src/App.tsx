import './styles/App.css'
import TopNewsBlock from './components/TopNewsBlock/TopNewsBlock'
import ButtonSeeMore from './components/ButtonSeeMore/ButtonSeeMore'
import NewsList from './components/NewsList/NewsList'


function App() {

  return (
    <div className='main-container'>
      <TopNewsBlock/>
      <NewsList/> 
      <ButtonSeeMore/>
    </div>
  )
}

export default App
