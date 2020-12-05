import {Container} from 'reactstrap'
import Navigation from './Components/Navigation' ;
import Jumbo from './Components/Jumbo'
import './Assets/style.css'
import Footer from './Components/Footer'

function App() {
  return (
    <Container id="landing" fluid >
      <Navigation />
      <Jumbo/>
      <Footer/>
    </Container>
  );
}

export default App;
