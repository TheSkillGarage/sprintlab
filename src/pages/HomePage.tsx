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
      <main className="text-slate-900">
        <HomeHero />
        <HomeClientStrip />
        <HomeStory />
        <HomeProjects />
        <HomeServices />

        {/* <HomeFooter /> */}
      </main>
    </>
  );
}
