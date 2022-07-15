import Perfil from '../../img/perfil.jpg'
import '../../styles/components/sidebar.scss'
import InfoContainer from './InfoContainer';
import SocialNetwork from './SocialNetwork';

function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Perfil} alt="my-perfil" style={{
        'width': '14rem'
      }} />
      <p className="title">Desenvolvedor Front-End Júnior</p>
      <SocialNetwork />
      <InfoContainer />
      <a href="https://drive.google.com/file/d/1QRhN1tggBMWRg0vUxq30ueRHcu1wAyli/view?usp=sharing" target="_blank" className="btn">Download Currículo</a>
    </aside>
  );
}

export default Sidebar;