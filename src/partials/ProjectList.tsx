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
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div className="shrink-0">
          <a href="https://github.com/Cristofferb7/Whos-That-Pokemonv2">
            <div className="flex h-56 w-56 items-center justify-center rounded-lg bg-red-950 p-4 hover:translate-y-1">
              <img
                src="/assets/images/pokedex-ai-logo.svg"
                alt="Who's That Pokémon Preview"
                loading="lazy"
              />
            </div>
          </a>
        </div>
        <div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              className="hover:text-cyan-400"
              href="https://github.com/Cristofferb7/Whos-That-Pokemonv2"
            >
              <div className="text-xl font-semibold">Who's That Pokémon</div>
            </a>
            <div className="ml-3 flex flex-wrap gap-2">
              <Tags color={ColorTags.SLATE}>Next.js</Tags>
              <Tags color={ColorTags.BLUE}>TypeScript</Tags>
              <Tags color={ColorTags.VIOLET}>Gemini</Tags>
              <Tags color={ColorTags.ROSE}>Claude Haiku</Tags>
              <Tags color={ColorTags.YELLOW}>PokéAPI</Tags>
              <Tags color={ColorTags.NEUTRAL}>Vercel</Tags>
            </div>
          </div>
          <p className="mt-3 text-gray-400">
            A mobile-first web app that identifies any Pokémon three ways — snap
            a photo, type a name, or describe what you saw to AI. Powered by
            Google Gemini 2.0 Flash with Claude Haiku as fallback.
          </p>
        </div>
      </div>
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
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.AMBER}>JavaScript</Tags>
            <Tags color={ColorTags.BLUE}>Gemini</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.VIOLET}>RESTAPI</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
