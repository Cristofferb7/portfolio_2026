import {
  GradientText,
  HeroAvatar,
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
          specializing in React, Node.js, and the MERN stack. Outgoing and
          data-driven professional with a passion for solving real-world
          business problems through analytics, tools, and technology. I bring 3+
          years of experience in SMB strategy, sales ops, CRM platforms, and
          dashboard reporting — with technical exposure to frontend development,
          SQL, and Excel automation. I’m currently pursuing a B.S. in Computer
          Science at UCF with a minor in Business Management and recently
          completed a Full Stack Bootcamp to sharpen my dev skills.
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
    />
  </Section>
);

export { Hero };
