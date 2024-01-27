import NavBar from './components/NavBar'
import CardsPeliculas from './components/CardsPeliculas'
import { Container, Row } from 'react-bootstrap'
import Peliculas from './data/Peliculas.json'
import { Route, Routes } from 'react-router-dom'
import CardsDetails from './components/CardsDetails'
import CardsRow from './components/CardsRow'
import CardsSearch from './components/CardsSearch'


function App() {

  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path='/' element={<CardsRow/>}/>
          <Route path='/view-pelicula/:id' element={<CardsDetails/>}/>
          <Route path='/buscar-pelicula/:busqueda' element={<CardsSearch/>}/>
        </Routes>
      </Container>
      
    </>
  )
}

export default App