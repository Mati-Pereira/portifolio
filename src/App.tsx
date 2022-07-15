import { Link } from 'react-router-dom';
import MainContent from './components/portugues/MainContent';
import Sidebar from './components/portugues/Sidebar';
import './styles/components/app.scss'

function App() {
  return (
    <div id="portifolio">
      <div className="link">
        <h1>Matheus Rodrigues</h1>
        <Link to="/english" className="btn">English</Link>
      </div>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;