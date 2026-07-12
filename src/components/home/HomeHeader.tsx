import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeAssetPaths } from '../../content/home';
import { HomeMenuOverlay } from './HomeMenuOverlay';

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];
const DURATION = 0.3;

export function HomeHeader() {
  const [menuHover, setMenuHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const showArrow = menuHover || menuOpen;
  const dotRotation = menuOpen ? 135 : menuHover ? 90 : 0;

  return (
    <header
      className={`left-0 right-0 top-0 z-50 transition-all duration-300 ${
        menuOpen ? 'fixed bg-transparent' : 'relative bg-[#F5F5FD]'
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-[1440px] items-center justify-between px-4 py-8 md:px-[70px]">
        <a
          className="inline-flex items-center"
          href="#hero"
          aria-label="SprintLab Digital home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            alt="SprintLab Digital"
            className="h-7 w-auto sm:h-8"
            src={menuOpen ? homeAssetPaths.logoWhite : homeAssetPaths.logo}
          />
        </a>

        <motion.button
          className={`inline-flex items-center cursor-pointer gap-3 rounded-full py-3 pl-5 pr-2 text-sm font-bold uppercase tracking-[0.08em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            menuOpen
              ? 'bg-white text-black focus-visible:outline-white'
              : 'bg-black text-white hover:bg-neutral-900 focus-visible:outline-black'
          }`}
          type="button"
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: DURATION, ease: EASE }}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>

          <motion.span
            className={`relative inline-flex size-8 items-center justify-center rounded-full transition-colors duration-300 ${
              menuOpen ? 'bg-neutral-200' : 'bg-[#363636]'
            }`}
            animate={{ scale: showArrow ? 1.0958 : 1 }}
            transition={{ duration: DURATION, ease: EASE }}
          >
            <motion.span
              className="flex flex-col items-center gap-[2.67px]"
              animate={{ rotate: dotRotation }}
              transition={{ duration: DURATION, ease: EASE }}
            >
              <span
                className={`size-2 rounded-full transition-colors duration-300 ${
                  menuOpen ? 'bg-black' : 'bg-white'
                }`}
              />
              <span
                className={`size-2 rounded-full transition-colors duration-300 ${
                  menuOpen ? 'bg-black' : 'bg-white'
                }`}
              />
            </motion.span>
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen ? <HomeMenuOverlay onClose={() => setMenuOpen(false)} /> : null}
      </AnimatePresence>
    </header>
  );
}
