import { motion } from "framer-motion";
import { homeNavigationLinks } from "../../content/home";

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];

type HomeMenuOverlayProps = {
  onClose: () => void;
};

export function HomeMenuOverlay({ onClose }: HomeMenuOverlayProps) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, ease: EASE }}
      // overflow-y-auto lets the panel scroll on short viewports instead of
      // silently clipping the last link (Contact) off the bottom
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-black pt-[124px]"
    >
      <nav className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-start pb-16">
        {homeNavigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group relative w-full overflow-hidden px-4 py-10 md:px-[70px]"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#442C86] transition-transform duration-300 ease-out group-hover:scale-x-100" />

            <span className="relative inline-block font-['IBM_Plex_Sans'] text-[clamp(2.5rem,6vw,100px)] font-bold capitalize leading-none text-white transition-transform duration-300 ease-out group-hover:translate-x-4">
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
