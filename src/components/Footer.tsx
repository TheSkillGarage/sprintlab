import { LogoWhite, InstagramIcon, LinkedInIcon, XIcon } from '../asset';

export function Footer() {
  return (
    <div className="bg-white pb-8 pt-12 sm:pb-10 sm:pt-16 md:pt-20 lg:pb-12 lg:pt-24">
      <footer className="mx-4 flex flex-col items-center justify-between rounded-3xl bg-black p-10 text-white shadow-2xl sm:mx-6 sm:p-14 md:mx-8 md:p-16 lg:mx-10 lg:p-[70px] xl:mx-auto xl:max-w-[1360px]">
        <div className="flex w-full flex-col lg:max-w-[1250px]">
          <div className="grid w-full grid-cols-2 gap-y-6 md:grid-cols-3 md:gap-y-0">
            {/* Column 1 */}
            <div className="flex flex-col gap-1 text-[11px] text-white lg:text-base">
              <p className="mb-3 font-bold text-white">Our Canada Office:</p>
              <p>123 Maple Street</p>
              <p>Toronto, Ontario, Canada</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start gap-2 justify-self-end text-[11px] text-white md:items-center md:justify-self-auto lg:text-base">
              <a href="/about" className="transition-colors hover:text-white">
                About Us
              </a>
              <a href="/#services" className="transition-colors hover:text-white">
                Services
              </a>
              <a href="/portfolio" className="transition-colors hover:text-white">
                Portfolio
              </a>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 flex flex-col items-start gap-4 text-[11px] text-white md:col-span-1 md:items-end lg:text-base">
              <div className="mb-2 flex gap-1 text-white">
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img src={XIcon} alt="X" />
                </a>
              </div>
              <p>+127 000 111 2222</p>
              <a
                href="mailto:enquiries@sprintlabdigital.com"
                className="transition-colors hover:text-white"
              >
                enquiries@sprintlabdigital.com
              </a>
            </div>
          </div>

          <div className="flex w-full items-center justify-center py-6 sm:py-10">
            <img
              src={LogoWhite}
              alt=""
              className="h-auto w-full lg:h-[220px] lg:w-[1250px]"
            />
          </div>

          <div className="mt-4 flex w-full items-center justify-between gap-4 text-[11px] text-white lg:text-base">
            <p>(c) SprintLab Digital 2026</p>
            <a href="#" className="transition-colors hover:text-white">
              Our Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
