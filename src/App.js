import './App.css';
import { Container, Row } from 'react-bootstrap';
import Sidebar from './component/Sidebar';
import MainPage from './component/MainPage';
import PlayerControls from './component/PlayerControls';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Container fluid>
      <Row>
        <Sidebar></Sidebar>
        <MainPage></MainPage>
      </Row>
    </Container>
    <PlayerControls></PlayerControls>
    </>
  );
}

export default App;
