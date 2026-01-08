import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Cristoffer Bohorquez</GradientText> 👋
        </>
      }
      description={
        <>
          Full-Stack Developer and Computer Science student at UCF (4.0 GPA)
          specializing in React, Node.js, and the MERN stack{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          Outgoing and data-driven professional with a passion for solving
          real-world business problems through analytics, tools, and technology.
          I bring 3+ years of experience in SMB strategy, sales ops, CRM
          platforms, and dashboard reporting — with technical exposure to
          frontend development, SQL, and Excel automation. I’m currently
          pursuing a B.S. in Computer Science at UCF with a minor in Business
          Management and recently completed a Full Stack Bootcamp to sharpen my
          dev skills. Whether building client trust, leading a team, or
          optimizing reporting, I’m all about hitting numbers and creating
          impact.,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </>
      }
      avatar={
        <img
          className="h-80 w-80 rounded-full border-4 border-sky-500 object-cover shadow-lg shadow-sky-500/20"
          src="/assets/images/spidermanSmall.jpeg"
          alt="Cristoffer Bohorquez Profile Picture"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
