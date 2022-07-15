import { Link } from "react-router-dom";
import MainContentEnglish from "./components/english/MainContentEnglish";
import SidebarEnglish from "./components/english/SidebarEnglish";
import './styles/components/app.scss'

function English() {
  return (
    <div id="portifolio">
      <div className="link">
        <h1>Matheus Rodrigues</h1>
        <Link to="/portugues" className="btn">Português</Link>
      </div>
      <SidebarEnglish />
      <MainContentEnglish />
    </div>
  );
}

export default English;