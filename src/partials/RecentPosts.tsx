import { GradientText, Section } from 'astro-boilerplate-components';

const RecentPosts = () => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Latest <GradientText>Activity</GradientText>
        </div>

        <div className="text-sm">
          <a
            href="https://www.linkedin.com/in/cristoffer-bohorquez/"
            target="_blank"
          >
            View all Activity →
          </a>
        </div>
      </div>
    }
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Item 1: LinkedIn Highlight */}
      <a
        href="https://www.linkedin.com/feed/update/urn:li:activity:7389759439924260864/"
        target="_blank"
        className="transition-opacity hover:opacity-90"
      >
        <div className="rounded-md border border-gray-700 bg-slate-800 p-3">
          <img
            src="/assets/images/DSC_0113_export.jpg"
            alt="LinkedIn Post"
            className="h-40 w-full rounded-md object-cover"
          />
          <div className="mt-3 font-semibold text-white">
            Hackathon Experience
          </div>
          <div className="text-sm text-gray-400">
            First hackathon experience with the team
          </div>
        </div>
      </a>

      {/* Item 2: GitHub or Project Highlight */}
      <a
        href="https://github.com/Cristofferb7/ai_fighter_matchup"
        target="_blank"
        className="transition-opacity hover:opacity-90"
      >
        <div className="rounded-md border border-gray-700 bg-slate-800 p-3">
          <img
            src="/assets/images/logo_fighter_matchup.jpg"
            alt="GitHub Repo"
            className="h-40 w-full rounded-md object-cover"
          />
          <div className="mt-3 font-semibold text-white">
            Ai Fighter Matchup
          </div>
          <div className="text-sm text-gray-400">
            Built in Knighthacks 2025.
          </div>
        </div>
      </a>

      {/* Item 3: Secondary LinkedIn Highlight */}
      <a
        href="https://www.linkedin.com/in/cristoffer-bohorquez/recent-activity/all/"
        target="_blank"
        className="transition-opacity hover:opacity-90"
      >
        <div className="rounded-md border border-gray-700 bg-slate-800 p-3">
          <img
            src="/assets/images/DSC_0084_export.jpg"
            alt="LinkedIn Post"
            className="h-40 w-full rounded-md object-cover"
          />
          <div className="mt-3 font-semibold text-white">
            Recent Linkedin Post
          </div>
          <div className="text-sm text-gray-400">Networking...</div>
        </div>
      </a>
    </div>
  </Section>
);

export { RecentPosts };
