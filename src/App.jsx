import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Global from './components/Global/Global';
import Header from './components/Header/Header';
import Sponsors from './components/Sponsors/Sponsors';
import './styles/app.scss';

function App() {
  return (
    <>
      <div class="background-container">
        <div class="background-image"></div>
      </div>
      <Header />
      <Global />
      <Events />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
