import { ReactNode } from 'react';
import { FooterLinks } from './footer-links';

import { ImgLink } from '../elements';

function Footer(): ReactNode {
  return (
    <footer className="d-flex justify-content-around align-items-center my-5 justify-self-end">
      <FooterLinks />
      <p> 2023 </p>
      <ImgLink
        href="https://rs.school/"
        classLink="ps-5 pe-2"
        src="/footer__logo.svg"
        alt="footer-logo"
      />
    </footer>
  );
}

export default Footer;
