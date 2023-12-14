import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../../components/types';

const Welcome: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: {
      welcomeTitle,
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
    },
  } = context;

  return (
    <section className="welcome">
      <div className="d-flex flex-row justify-content-end my-3 mx-3">
        <button className="btn btn-secondary my-2 my-sm-0 mx-3">
          {welcomeSignIn}
        </button>
        <button className="btn btn-secondary my-2 my-sm-0 mx-3">
          {welcomeSignUp}{' '}
        </button>
      </div>

      <h1 className="text-info text-center">{welcomeTitle}</h1>

      <div className="d-flex flex-row m-15 justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <h2>{welcomeTeamTitle}</h2>
          <p>{welcomeTeamIntro}</p>
        </div>
        <div className="d-flex flex-column">
          <a href="https://rs.school/">A PIC OF ROLLERS HERE </a>
          <div> & RS School</div>
        </div>
      </div>

      <div className="d-flex flex-row m-15 justify-content-center align-items-center p-4">
        <div className="d-flex flex-column text-center p-4">
          <img
            className="rounded-circle"
            src="public/member1.jpg"
            alt="Ilya"
          ></img>
          <div className="fs-3"> {welcomeMemberName1}</div>
          <div className="fs-4"> {welcomeMemberRole1}</div>
        </div>
        <div className="d-flex flex-column text-center p-4">
          <img
            className="rounded-circle"
            src="public/member2.jpg"
            alt="Kamilla"
          ></img>
          <div className="fs-3"> {welcomeMemberName2}</div>
          <div className="fs-4"> {welcomeMemberRole2}</div>
        </div>
        <div className="d-flex flex-column text-center p-4">
          <img
            className="rounded-circle"
            src="public/member3.jpg"
            alt="Aleksandr"
          ></img>
          <div className="fs-3"> {welcomeMemberName3}</div>
          <div className="fs-4"> {welcomeMemberRole3}</div>
        </div>
      </div>

      <div className="d-flex flex-column m-15 justify-content-center align-items-center">
        <h2> {welcomeProjectFactsTitle}</h2>
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

      <div className="d-flex m-5 ">
        <div className="d-flex flex-column m-4 col">
          <div className="fs-3 mb-3">{welcomeMemberName1}</div>
          <div>{welcomeBioContributionsTitle}</div>
          <div>{welcomeBioContribution1}</div>
        </div>
        <div className="d-flex flex-column m-4 col">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a>GH</a>
              <a>DSC</a>
            </div>
            <div>{welcomeBioLocation1}</div>
          </div>
          <div>{welcomeBioAboutTitle}</div>
          <div>{welcomeBioAbout1}</div>
        </div>
      </div>

      <div className="d-flex m-5">
        <div className="d-flex flex-column m-4 col">
          <div className="fs-3 mb-3">{welcomeMemberName2}</div>
          <div>{welcomeBioContributionsTitle}</div>
          <div>{welcomeBioContribution2}</div>
        </div>
        <div className="d-flex flex-column m-4 col">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a>GH</a>
              <a>DSC</a>
            </div>
            <div>{welcomeBioLocation2}</div>
          </div>
          <div>{welcomeBioAboutTitle}</div>
          <div>{welcomeBioAbout2}</div>
        </div>
      </div>

      <div className="d-flex m-5 ">
        <div className="d-flex flex-column m-4 col">
          <div className="fs-3 mb-3">{welcomeMemberName3}</div>
          <div>{welcomeBioContributionsTitle}</div>
          <div>{welcomeBioContribution3}</div>
        </div>
        <div className="d-flex flex-column m-4 col">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a>GH</a>
              <a>DSC</a>
            </div>
            <div>{welcomeBioLocation3}</div>
          </div>
          <div>{welcomeBioAboutTitle}</div>
          <div>{welcomeBioAbout3}</div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
