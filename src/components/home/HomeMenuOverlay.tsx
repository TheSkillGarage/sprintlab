import { motion } from 'framer-motion';
import { homeNavigationLinks } from '../../content/home';

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];

type HomeMenuOverlayProps = {
  onClose: () => void;
};

export function HomeMenuOverlay({ onClose }: HomeMenuOverlayProps) {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5, ease: EASE }}
      // dvh (not vh) accounts for mobile browser chrome (address bar) so the
      // "100%" here matches the ACTUAL visible viewport, not the taller
      // static 100vh that would leave a sliver scrollable on phones.
      className="fixed inset-0 z-40 flex flex-col bg-black"
      style={{ height: '100dvh' }}
    >
      {/*
        flex-1 on the nav + flex-1 on every single link row means the links
        split the remaining vertical space EVENLY, however many there are.
        This isn't tuned to "4 links happen to fit" — it's mathematically
        guaranteed to fit any number of links on any screen height, because
        each row's height is (available height) / (link count), computed
        by the browser's flex algorithm rather than a fixed py value.
      */}
      <nav className="flex flex-1 flex-col overflow-hidden px-4 pt-[110px] md:px-[70px]">
        {homeNavigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group relative flex flex-1 items-center overflow-hidden border-b border-white/5 last:border-0"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#442C86] transition-transform duration-300 ease-out group-hover:scale-x-100" />

            {/* Font size scales with viewport HEIGHT (vh), not just width,
                so it shrinks in step with the row height on short screens
                instead of overflowing its row. */}
            <span
              className="relative inline-block font-['IBM_Plex_Sans'] font-bold capitalize leading-none text-white transition-transform duration-300 ease-out group-hover:translate-x-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw + 4vh, 100px)' }}
            >
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
