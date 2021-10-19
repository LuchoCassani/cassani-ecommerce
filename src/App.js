
import './sass/App.scss';
import "./sass/NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer"
import SliderPrincipal from './components/SliderPrincipal/SliderPrincipal';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Container fluid>
          <Navbar />
          <SliderPrincipal />
          <ItemListContainer text="Bienvenidos, en este sitio encontraras lo mejor para el handball" />
          
          
      </Container>
    </>
  );
}

export default App;
