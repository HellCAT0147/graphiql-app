import { ReactNode } from 'react';
import { FooterLinks } from './footer-links';

import { IconLink, ImgLink } from '../elements';

function Footer(): ReactNode {
  return (
    <footer className="d-flex justify-content-around align-items-center my-5 justify-self-end">
      <FooterLinks />
      <div>
        <p style={{ color: '#FFFFFF' }}>HAQ © 2023</p>
        <IconLink
          href={'https://github.com/HellCAT0147/graphiql-app'}
          faCode="fa-brands fa-github"
          text={'Graphiql App'}
          direction="column"
          btnStyle="danger"
        />
      </div>
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
