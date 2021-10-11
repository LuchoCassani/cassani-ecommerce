
import './sass/App.scss';
import "./sass/NavBar.scss"
import Navbar from '../src/components/NavBar/NavBar';
import { MensajeBienvenida } from './components/NavBar/ItemListContainer';


function App() {
  return (
    <>
      <div className="App">
          <Navbar />
          <MensajeBienvenida text="Bienvenidos, en este sitio encontraras lo mejor para el handball" />
          
      </div>
    </>
  );
}

export default App;
