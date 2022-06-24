import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PaginaProducto from './screens/PaginaProducto';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>decoralaser</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/producto/:slug' element={<PaginaProducto />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center '>AYUDAAAAAAAAAAA</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
