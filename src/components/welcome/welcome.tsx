import { useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../../components/types';
import PersonCard from './personCard';
import Bio from './bio';
import Button from './button';
import ProjectFacts from './projectFacts';
import Collab from './collab';
import TeamIntro from './teamIntro';

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
            <Button text={welcomeSignIn} link={'/login'} />
            <Button text={welcomeSignUp} link={'/registration'} />
          </>
        ) : (
          <>
            <Button text={welcomeMain} link={'/'} />
          </>
        )}
      </div>
      <h1 className="text-info text-center">{welcomeTitle}</h1>
      <TeamIntro title={welcomeTeamTitle} text={welcomeTeamIntro} />
      <div className="d-flex flex-row m-15 justify-content-center align-items-center p-4">
        <PersonCard
          name={welcomeMemberName1}
          pic="public/member1.jpg"
          role={welcomeMemberRole1}
        />
        <PersonCard
          name={welcomeMemberName2}
          pic="public/member2.jpg"
          role={welcomeMemberRole2}
        />
        <PersonCard
          name={welcomeMemberName3}
          pic="public/member3.jpg"
          role={welcomeMemberRole3}
        />
      </div>
      <ProjectFacts
        title={welcomeProjectFactsTitle}
        pullrequests={welcomeProjectFactsPRs}
        commits={welcomeProjectFactsCommits}
        branches={welcomeProjectFactsBranches}
        lines={welcomeProjectFactsLines}
      />
      <Bio
        name={welcomeMemberName1}
        location={welcomeBioLocation1}
        gh="https://github.com/HellCAT0147"
        mail="mailto:letscheckmail23@gmail.com"
        impactTitle={welcomeBioContributionsTitle}
        impact={welcomeBioContribution1}
        infoTitle={welcomeBioAboutTitle}
        info={welcomeBioAbout1}
      />
      <Bio
        name={welcomeMemberName2}
        location={welcomeBioLocation2}
        gh="https://github.com/LqosL"
        mail="mailto:camillaagliullina@gmail.com"
        impactTitle={welcomeBioContributionsTitle}
        impact={welcomeBioContribution2}
        infoTitle={welcomeBioAboutTitle}
        info={welcomeBioAbout2}
      />
      <Bio
        name={welcomeMemberName3}
        location={welcomeBioLocation3}
        gh="https://github.com/a-reznikov"
        mail="mailto:a.reznnikov@gmail.com"
        impactTitle={welcomeBioContributionsTitle}
        impact={welcomeBioContribution3}
        infoTitle={welcomeBioAboutTitle}
        info={welcomeBioAbout3}
      />
      <Collab
        title={welcomeCollaborationTitle}
        text={welcomeCollaborationDescription}
      />
      <div className="d-flex flex-column justify-content-center align-items-center px-3 mt-5">
        <h2 className="text-info mb-3">{welcomeThanksTitle}</h2>
        <div className="d-flex">
          <PersonCard
            name={welcomeMentorName1}
            pic="public/member1.jpg"
            role={welcomeMentorRole}
          />
          <PersonCard
            name={welcomeMentorName2}
            pic="public/member1.jpg"
            role={welcomeMentorRole}
          />
          <PersonCard
            name={welcomeMentorName3}
            pic="public/member1.jpg"
            role={welcomeMentorRole}
          />
        </div>
        <div>{welcomeMentorDescription}</div>
      </div>
    </section>
  );
};

export default Welcome;
