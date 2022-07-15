import '../styles/components/maincontent.scss'
import AboutContainer from './AboutContainer';
import TecnologiesContainer from './TecnologiesContainer';

function MainContent() {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiesContainer />
    </main>
  );
}

export default MainContent;