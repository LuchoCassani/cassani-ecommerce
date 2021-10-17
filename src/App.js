
import './sass/App.scss';
import "./sass/NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import { MensajeBienvenida } from "./containers/ItemListContainer/ItemListContainer"
import SliderPrincipal from './components/SliderPrincipal/SliderPrincipal';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <div className="App container-fluid">
          <Navbar />
          
          <MensajeBienvenida text="Bienvenidos, en este sitio encontraras lo mejor para el handball" />
          <ItemCount />
      </div>
    </>
  );
}

export default App;
