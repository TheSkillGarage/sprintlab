import { LogoWhite, InstagramIcon, LinkedInIcon, XIcon } from '../asset';

export function Footer() {
  return (
    <div className="bg-white pt-[112px] pb-[43px]">
      <footer className="bg-black text-white rounded-3xl p-10 sm:p-14 md:p-16 lg:p-[70px] mx-6 flex flex-col items-center justify-between shadow-2xl">
        <div className="w-full max-w-[1400px] flex flex-col">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-y-0 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-1 text-[11px] lg:text-base text-white">
              <p className="font-bold text-white mb-3">Our Canada Office:</p>
              <p>123 Maple Street</p>
              <p>Toronto, Ontario, Canada</p>
              {/* <p>Canada</p> */}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 text-[11px] lg:text-base text-white items-start md:items-center justify-self-end md:justify-self-auto">
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Portfolio
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 text-[11px] lg:text-base text-white col-span-2 md:col-span-1 items-start md:items-end">
              <div className="flex gap-1 text-white mb-2">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={XIcon} alt="X" />
                </a>
              </div>
              <p>+127 000 111 2222</p>
              <a
                href="mailto:enquiries@sprintlabdigital.com"
                className="hover:text-white transition-colors"
              >
                enquiries@sprintlabdigital.com
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center py-6 sm:py-10 w-full">
            <img src={LogoWhite} alt="" className="w-full h-auto" />
          </div>

          <div className="flex justify-between items-center text-[11px] lg:text-base text-white w-full mt-4 gap-4">
            <p>(c) SprintLab Digital 2026</p>
            <a href="#" className="hover:text-white transition-colors">
              Our Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
