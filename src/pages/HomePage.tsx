import {
  HomeCta,
  HomeClientStrip,
  HomeFooter,
  HomeHeader,
  HomeHero,
  HomeProjects,
  HomeServices,
  HomeStory,
} from '../components/home';

export function HomePage() {
  return (
    <>
      <HomeHeader />
      <main className="text-slate-900">
        <HomeHero />
        <HomeClientStrip />
        <HomeStory />
        <HomeProjects />
        <HomeServices />
        <HomeCta />
        <HomeFooter />
      </main>
    </>
  );
}
