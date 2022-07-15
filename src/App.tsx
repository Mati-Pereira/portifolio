import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.scss'

function App() {
  return (
    <div id="portifolio">
      <h1>Matheus Rodrigues</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;