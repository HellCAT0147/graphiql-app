import { ReactNode } from 'react';
import { FooterLinks } from './footer-links';

function Footer(): ReactNode {
  return (
    <footer className="d-flex justify-content-around align-items-center my-5 justify-self-end">
      <FooterLinks />
      <div> 2023 </div>
      <div className="">
        <a href="https://rs.school/">
          <img src="/footer__logo.svg" alt="footer-logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
