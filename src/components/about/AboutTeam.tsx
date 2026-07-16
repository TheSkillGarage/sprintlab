import { aboutTeamContent } from '../../content/about';

export function AboutTeam() {
  return (
    <section className="bg-white py-16 sm:py-24" id="team">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] px-4 sm:px-6 md:px-[70px]">
        <div className="mb-12 max-w-4xl sm:mb-16">
          <h2
            className="mb-6 font-bold leading-[1.4] text-[#442C86]"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 40 }}
          >
            Our Team<span className="text-[#F6D9C8]">.</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            {aboutTeamContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
          {aboutTeamContent.members.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[32px] bg-slate-100 aspect-[3/4]"
              tabIndex={0}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0 md:group-focus-within:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 transition duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/80 sm:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
