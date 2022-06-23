import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PaginaProducto from './screens/PaginaProducto';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>decoralaser</Link>
        </header>
        <main>
          <Routes>
            <Route path='/producto/:slug' element={<PaginaProducto />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
