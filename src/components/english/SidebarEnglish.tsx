import Perfil from '../img/perfil.jpg'
import '../styles/components/sidebar.scss'
import InfoContainerEnglish from './InfoContainerEnglish';
import SocialNetworkEnglish from './SocialNetworkEnglish';

function SidebarEnglish() {
  return (
    <aside id="sidebar">
      <img src={Perfil} alt="my-perfil" style={{
        'width': '14rem'
      }}/>
      <p className="title">Junior Front-End Developer</p>
      <SocialNetworkEnglish />
      <InfoContainerEnglish />
      <a href="#" target="_blank" className="btn">Download Resume</a>
    </aside>
  );
}

export default SidebarEnglish;