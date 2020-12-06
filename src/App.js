import {Container} from 'reactstrap'
import Navigation from './Components/Navigation' ;
import Jumbo from './Components/Jumbo'
import './Assets/style.css'

function App() {
  return (
    <Container id="landing" fluid >
      <Navigation />
      <Jumbo/>
    </Container>
  );
}

export default App;
