import '../styles/components/infocontainer.scss'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

function InfoContainerEnglish() {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Contact</h3>
          <p>(11) 94476-1997</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>Email</h3>
          <p>matheus-rodrigues37@live.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Location</h3>
          <p>São Bernardo do Campo / SP</p>
        </div>
      </div>
    </section>
  );
}

export default InfoContainerEnglish;