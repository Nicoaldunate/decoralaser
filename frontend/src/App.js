import datos from './data';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a href='/'>decoralaser</a>
      </header>
      <main>
        <h1>Productos</h1>
        {datos.tipoProductos.map((producto) => (
          <div>
            <img src={producto.imagen1} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
