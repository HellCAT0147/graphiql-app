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
            <button className="btn btn-secondary my-2 my-sm-0 mx-3">
              {welcomeSignIn}
            </button>
            <button className="btn btn-secondary my-2 my-sm-0 mx-3">
              {welcomeSignUp}
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-secondary my-2 my-sm-0 mx-3">
              {welcomeMain}
            </button>
          </>
        )}
      </div>
      <h1 className="text-info text-center">{welcomeTitle}</h1>;
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
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#FFF"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
              </a>

              <a className="icon-link" href="">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 256 256"
                  width="30px"
                  height="30px"
                  fill="#FFF"
                >
                  <g>
                    <g>
                      <path d="M132.5,119.3c-2.5,1.2-6.5,1.2-9,0L63.7,90.8c-2.5-1.2-2.7-0.9-0.5,0.7L124,135c2.2,1.5,5.8,1.6,8,0l60.8-43.4c2.1-1.5,2-1.9-0.5-0.7L132.5,119.3z" />
                      <path d="M206.7,10H49.3C27.6,10,10,27.6,10,49.3v157.3c0,21.7,17.6,39.4,39.3,39.4h157.3c21.7,0,39.3-17.6,39.3-39.3V49.3C246,27.6,228.4,10,206.7,10z M206.7,167.3c0,10.9-8.8,19.7-19.6,19.7H69c-10.8,0-19.6-8.9-19.6-19.7V88.7C49.4,77.8,58.1,69,69,69h118.1c10.8,0,19.6,8.9,19.6,19.7V167.3z" />
                    </g>
                  </g>
                </svg>
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
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#FFF"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
              </a>

              <a className="icon-link" href="">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 256 256"
                  width="30px"
                  height="30px"
                  fill="#FFF"
                >
                  <g>
                    <g>
                      <path d="M132.5,119.3c-2.5,1.2-6.5,1.2-9,0L63.7,90.8c-2.5-1.2-2.7-0.9-0.5,0.7L124,135c2.2,1.5,5.8,1.6,8,0l60.8-43.4c2.1-1.5,2-1.9-0.5-0.7L132.5,119.3z" />
                      <path d="M206.7,10H49.3C27.6,10,10,27.6,10,49.3v157.3c0,21.7,17.6,39.4,39.3,39.4h157.3c21.7,0,39.3-17.6,39.3-39.3V49.3C246,27.6,228.4,10,206.7,10z M206.7,167.3c0,10.9-8.8,19.7-19.6,19.7H69c-10.8,0-19.6-8.9-19.6-19.7V88.7C49.4,77.8,58.1,69,69,69h118.1c10.8,0,19.6,8.9,19.6,19.7V167.3z" />
                    </g>
                  </g>
                </svg>
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
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#FFF"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
              </a>

              <a className="icon-link" href="">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 256 256"
                  width="30px"
                  height="30px"
                  fill="#FFF"
                >
                  <g>
                    <g>
                      <path d="M132.5,119.3c-2.5,1.2-6.5,1.2-9,0L63.7,90.8c-2.5-1.2-2.7-0.9-0.5,0.7L124,135c2.2,1.5,5.8,1.6,8,0l60.8-43.4c2.1-1.5,2-1.9-0.5-0.7L132.5,119.3z" />
                      <path d="M206.7,10H49.3C27.6,10,10,27.6,10,49.3v157.3c0,21.7,17.6,39.4,39.3,39.4h157.3c21.7,0,39.3-17.6,39.3-39.3V49.3C246,27.6,228.4,10,206.7,10z M206.7,167.3c0,10.9-8.8,19.7-19.6,19.7H69c-10.8,0-19.6-8.9-19.6-19.7V88.7C49.4,77.8,58.1,69,69,69h118.1c10.8,0,19.6,8.9,19.6,19.7V167.3z" />
                    </g>
                  </g>
                </svg>
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
