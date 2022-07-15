import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import '../styles/components/socialnetworks.scss'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn style={{'fontSize': '4rem'}}/>, link: "https://github.com/Mati-Pereira" },
  { name: "github", icon: <FaGithub style={{ 'fontSize': '4rem' }} />, link: "https://www.linkedin.com/in/matheus-rodrigues-pereira/" },

]

function SocialNetworkEnglish() {
  return (
    <section id="socialNetworks">
      {socialNetworks.map((network, index) => (
        <a id={network.name} href={network.link} key={index} className="social-btn">{network.icon}</a>
      ))}
    </section>
  );
}

export default SocialNetworkEnglish;