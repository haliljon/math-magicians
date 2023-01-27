import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGoogle,
  BsLinkedin,
} from 'react-icons/bs';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="social-links">
        <button type="button">
          <BsTwitter />
        </button>
        <button type="button">
          <BsFacebook />
        </button>
        <button type="button">
          <BsInstagram />
        </button>
        <button type="button">
          <BsGoogle />
        </button>
        <button type="button">
          <BsLinkedin />
        </button>
      </div>
      <div className="copyright">
        &copy; Copyright
        <strong>
          <span> Haliljon</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">Designed by Haliljon Jurabev</div>
    </div>
  </footer>
);

export default Footer;
