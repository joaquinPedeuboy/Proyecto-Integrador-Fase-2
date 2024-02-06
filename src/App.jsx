import NavBar from './components/NavBar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import CardsDetails from './components/CardsDetails'
import CardsRow from './components/CardsRow'

function App() {

  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path='/' element={<CardsRow/>}/>
          <Route path='/view-pelicula/:id' element={<CardsDetails/>}/>
        </Routes>
      </Container>
      
    </>
  )
}

export default App
