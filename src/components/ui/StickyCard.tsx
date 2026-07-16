import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];
const STICK_OFFSET = 120;

export interface StickyCardData {
  number: string;
  title: string;
  description: string;
  tone: 'light' | 'dark';
}

export function StickyCard({
  data,
  index,
}: {
  data: StickyCardData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDark = data.tone === 'dark';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: STICK_OFFSET, zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`grid grid-cols-[auto_1fr] items-center gap-3 rounded-[24px] p-6 shadow-[0_20px_50px_rgba(68,44,134,0.12)] sm:gap-5 sm:p-10 lg:min-h-[328px] lg:grid-cols-[0.35fr_1.65fr] lg:gap-6 lg:p-16 ${
          isDark ? 'bg-[#442C86] text-white' : 'bg-[#F5F5FD] text-slate-900'
        }`}
      >
        <p
          className="font-black leading-none tracking-tight"
          style={{
            fontSize: 'clamp(4.5rem, 11vw, 10rem)',
            color: isDark ? '#DCDBF9' : '#D7D0F5',
          }}
        >
          {data.number}
        </p>
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3
            className={`text-xl font-bold tracking-tight sm:text-2xl lg:text-[2rem] ${
              isDark ? 'text-white' : 'text-[#442C86]'
            }`}
          >
            {data.title}
          </h3>
          <p
            className={`max-w-3xl text-sm leading-7 sm:text-base ${
              isDark ? 'text-white/78' : 'text-slate-600'
            }`}
          >
            {data.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
}
