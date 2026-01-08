import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Featured <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Ai Fighter Matchup"
        description="The website consists of a FastAPI backend and a React frontend that work together to provide AI-powered analysis of fighting game character matchups. The system uses Google's Gemini AI to analyze and provide detailed insights about character matchups."
        link="https://github.com/Cristofferb7/ai_fighter_matchup"
        img={{
          src: '/assets/images/logo_fighter_matchup.jpg',
          alt: 'Baseball Dashboard Preview',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>React.js</Tags>
            <Tags color={ColorTags.LIME}>Data Analytics</Tags>
            <Tags color={ColorTags.AMBER}>JavaScript</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
