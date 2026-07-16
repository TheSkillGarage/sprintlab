import { homeClientBrands } from '../../content/home';

export function AboutClients() {
  return (
    <section className="bg-[#000000] py-16 text-white sm:py-[64px]" id="clients">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] px-4 sm:px-6 md:px-[70px]">
        <h2 className="mb-12 text-[23px] font-bold leading-tight sm:mb-16 sm:text-[48px]">
          We've partnered with over 20+ business to build lasting brands.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-[32px] md:gap-y-[80px]">
          {/* Repeat the brands to show 8 in a grid as per design */}
          {[...homeClientBrands, ...homeClientBrands.slice(0, 3)].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex w-full aspect-square items-center justify-center rounded-[4px] sm:rounded-[24px] bg-[#141414] transition"
            >
              <div
                className={`flex items-center gap-2 text-sm font-bold sm:text-lg ${brand.muted ? 'text-white/50' : 'text-[#DCDBF9]'}`}
              >
                <img
                  src={brand.icon}
                  alt={brand.name}
                  className={`h-5 w-auto sm:h-7 ${brand.muted ? 'opacity-50 grayscale' : ''}`}
                />
                <span
                  className="text-[#A499EC]"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
