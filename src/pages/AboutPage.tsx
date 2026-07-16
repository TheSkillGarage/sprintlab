import { AboutHero, AboutApproach, AboutClients, AboutTeam } from '../components/about';

export function AboutPage() {
  return (
    <main className="text-slate-900">
      <AboutHero />
      <AboutApproach />
      <AboutClients />
      <AboutTeam />
    </main>
  );
}
