import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../../components/types';

const Welcome: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: {
      welcomeTitle,
      welcomeMain,
      welcomeSignIn,
      welcomeSignUp,
      welcomeTeamTitle,
      welcomeTeamIntro,
      welcomeMemberName1,
      welcomeMemberName2,
      welcomeMemberName3,
      welcomeMemberRole1,
      welcomeMemberRole2,
      welcomeMemberRole3,
      welcomeProjectFactsTitle,
      welcomeProjectFactsPRs,
      welcomeProjectFactsCommits,
      welcomeProjectFactsBranches,
      welcomeProjectFactsLines,
      welcomeBioContributionsTitle,
      welcomeBioAboutTitle,
      welcomeBioLocation1,
      welcomeBioLocation2,
      welcomeBioLocation3,
      welcomeBioContribution1,
      welcomeBioContribution2,
      welcomeBioContribution3,
      welcomeBioAbout1,
      welcomeBioAbout2,
      welcomeBioAbout3,
      welcomeCollaborationTitle,
      welcomeCollaborationDescription,
      welcomeThanksTitle,
      welcomeMentorName1,
      welcomeMentorName2,
      welcomeMentorName3,
      welcomeMentorRole,
      welcomeMentorDescription,
    },
  } = context;

  const tokenMissing = true;
  //TODO:: change 'tokenMissing' to let or to context or state

  return (
    <section className="welcome m-auto" style={{ maxWidth: 1200 }}>
      <div className="d-flex flex-row justify-content-end my-3 mx-3">
        {tokenMissing ? (
          <>
            <a href={'/login'}>
              <button className="btn btn-secondary my-2 my-sm-0 mx-3">
                {welcomeSignIn}
              </button>
            </a>
            <a href={'/registration'}>
              <button className="btn btn-secondary my-2 my-sm-0 mx-3">
                {welcomeSignUp}
              </button>
            </a>
          </>
        ) : (
          <>
            <a href={'/'}>
              <button className="btn btn-secondary my-2 my-sm-0 mx-3">
                {welcomeMain}
              </button>
            </a>
          </>
        )}
      </div>
      <h1 className="text-info text-center">{welcomeTitle}</h1>
      <div className="d-flex flex-row m-15 justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <h2 className="text-info">{welcomeTeamTitle}</h2>
          <p>{welcomeTeamIntro}</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center text-center ">
          <a href="https://rs.school/">
            <img src="/logo-rs.svg" alt="logo"></img>
          </a>
          <div className="text-secondary fs-2 "> & RS School</div>
        </div>
      </div>
      <div className="d-flex flex-row m-15 justify-content-center align-items-center p-4">
        <div className="d-flex flex-column text-center p-4 align-items-center">
          <img
            className="rounded-circle"
            src="public/member1.jpg"
            alt="Ilya"
            style={{ maxWidth: 200, maxHeight: 200 }}
          ></img>
          <div className="fs-3"> {welcomeMemberName1}</div>
          <div className="fs-4"> {welcomeMemberRole1}</div>
        </div>
        <div className="d-flex flex-column text-center p-4 align-items-center">
          <img
            className="rounded-circle"
            src="public/member2.jpg"
            alt="Kamilla"
            style={{ maxWidth: 200, maxHeight: 200 }}
          ></img>
          <div className="fs-3"> {welcomeMemberName2}</div>
          <div className="fs-4"> {welcomeMemberRole2}</div>
        </div>
        <div className="d-flex flex-column text-center p-4 align-items-center">
          <img
            className="rounded-circle"
            src="public/member3.jpg"
            alt="Aleksandr"
            style={{ maxWidth: 200, maxHeight: 200 }}
          ></img>
          <div className="fs-3"> {welcomeMemberName3}</div>
          <div className="fs-4"> {welcomeMemberRole3}</div>
        </div>
      </div>
      <div className="d-flex flex-column m-15 justify-content-center align-items-center">
        <h2 className="text-info"> {welcomeProjectFactsTitle}</h2>
        <div className="d-flex text-center">
          <div className="p-4">
            <h3> {welcomeProjectFactsPRs}</h3>
            <span> 65 </span>
          </div>
          <div className="p-4">
            <h3> {welcomeProjectFactsCommits}</h3>
            <span> 450 </span>
          </div>
          <div className="p-4">
            <h3> {welcomeProjectFactsBranches}</h3>
            <span> 62 </span>
          </div>
          <div className="p-4">
            <h3> {welcomeProjectFactsLines}</h3>
            <span> ~30k </span>
          </div>
        </div>
      </div>
      <div className="d-flex m-5 justify-content-center align-self-center">
        <div className="d-flex flex-column m-4 col ">
          <div className="fs-3 mb-3 text-info">{welcomeMemberName1}</div>
          <div className="fs-4">{welcomeBioContributionsTitle}</div>
          <div>{welcomeBioContribution1}</div>
        </div>
        <div className="d-flex flex-column m-4 col">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a className="icon-link" href="">
                <img src="/icon-gh.svg" alt="GitHub"></img>
              </a>
              <a className="icon-link" href="">
                <img src="/icon-mail.svg" alt="GitHub"></img>
              </a>
            </div>
            <div>{welcomeBioLocation1}</div>
          </div>
          <div className="fs-4">{welcomeBioAboutTitle}</div>
          <div>{welcomeBioAbout1}</div>
        </div>
      </div>
      <div className="d-flex m-5 justify-content-center align-self-center">
        <div className="d-flex flex-column m-4 col">
          <div className="fs-3 mb-3 text-info">{welcomeMemberName2}</div>
          <div className="fs-4">{welcomeBioContributionsTitle}</div>
          <div>{welcomeBioContribution2}</div>
        </div>
        <div className="d-flex flex-column m-4 col">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a className="icon-link" href="">
                <img src="/icon-gh.svg" alt="GitHub"></img>
              </a>
              <a className="icon-link" href="">
                <img src="/icon-mail.svg" alt="GitHub"></img>
              </a>
            </div>
            <div>{welcomeBioLocation2}</div>
          </div>
          <div className="fs-4">{welcomeBioAboutTitle}</div>
          <div>{welcomeBioAbout2}</div>
        </div>
      </div>
      <div className="d-flex m-5 justify-content-center align-self-center">
        <div className="d-flex flex-column m-4 col">
          <div className="fs-3 mb-3 text-info">{welcomeMemberName3}</div>
          <div className="fs-4">{welcomeBioContributionsTitle}</div>
          <div>{welcomeBioContribution3}</div>
        </div>
        <div className="d-flex flex-column m-4 col">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a className="icon-link" href="">
                <img src="/icon-gh.svg" alt="GitHub"></img>
              </a>
              <a className="icon-link" href="">
                <img src="/icon-mail.svg" alt="GitHub"></img>
              </a>
            </div>
            <div>{welcomeBioLocation3}</div>
          </div>
          <div className="fs-4">{welcomeBioAboutTitle}</div>
          <div>{welcomeBioAbout3}</div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center px-3">
        <h2 className="text-info"> {welcomeCollaborationTitle}</h2>
        <div>{welcomeCollaborationDescription}</div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center px-3 mt-5">
        <h2 className="text-info mb-3">{welcomeThanksTitle}</h2>
        <div className="d-flex">
          <div className="col justify-content-center align-items-center p-3 text-center">
            <img
              src="public/member1.jpg"
              alt="Mentor"
              className="rounded-circle"
              style={{ maxWidth: 200, maxHeight: 200 }}
            ></img>
            <div className="fs-3">{welcomeMentorName1}</div>
            <div>{welcomeMentorRole}</div>
          </div>
          <div className="col justify-content-center align-items-center p-3 text-center">
            <img
              src="public/member1.jpg"
              alt="Mentor"
              className="rounded-circle"
              style={{ maxWidth: 200, maxHeight: 200 }}
            ></img>
            <div className="fs-3">{welcomeMentorName2}</div>
            <div>{welcomeMentorRole}</div>
          </div>
          <div className="col justify-content-center align-items-center p-3 text-center">
            <img
              src="public/member1.jpg"
              alt="Mentor"
              className="rounded-circle"
              style={{ maxWidth: 200, maxHeight: 200 }}
            ></img>
            <div className="fs-3">{welcomeMentorName3}</div>
            <div>{welcomeMentorRole}</div>
          </div>
        </div>
        <div>{welcomeMentorDescription}</div>
      </div>
    </section>
  );
};

export default Welcome;
