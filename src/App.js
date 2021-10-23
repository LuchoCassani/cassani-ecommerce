
import './sass/App.scss';
import "./sass/NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer"
import SliderPrincipal from './components/SliderPrincipal/SliderPrincipal';
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <>
      <Container fluid>
          <Navbar />
          <SliderPrincipal />
          <ItemListContainer text="Encontra lo que buscas" />
      </Container>
    </>
  );
}

export default App;
