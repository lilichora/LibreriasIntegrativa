import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pimer Proyecto en React <code>Integrantes: Liliana Chora, Ivonne Jacome, Douglas Moreno</code>
        </p>
        <table style={{ margin: '40px' }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos</td>
              <td>Mora</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Andres</td>
              <td>Cartagena</td>
              <td>80</td>
            </tr>
            <tr>
              <td>David</td>
              <td>Perez</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
