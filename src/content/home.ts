export const homeNavigationLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const homeClientBrands = [
  { name: 'Capsule', icon: '/icons/home/brands/capsule.svg', muted: true },
  { name: 'Hourglass', icon: '/icons/home/brands/hourglass.svg', muted: false },
  { name: 'Command+R', icon: '/icons/home/brands/command-r.svg', muted: false },
  { name: 'Sisyphus', icon: '/icons/home/brands/sisyphus.svg', muted: false },
  { name: 'Layers', icon: '/icons/home/brands/layers.svg', muted: false },
] as const;

export const homeHeroStats = [
  { value: '40+', label: 'Clients served' },
  { value: '90%', label: 'Success score' },
  { value: '10+', label: 'Years of expertise' },
] as const;

export const homeProjects = [
  {
    title: 'Balenciaga',
    tag: 'Web Design • 2026',
    tagline: '"It\u2019s different"',
    imageAlt: 'Black Balenciaga hoodie product mockup',
    imageSrc: '/images/home/project-balenciaga.png',
  },
  {
    title: 'Jamillee',
    tag: 'Branding • 2026',
    tagline: '"Be Unique"',
    imageAlt: 'Pink cosmetic product mockup for Jamillee',
    imageSrc: '/images/home/project-jamillee.png',
  },
  {
    title: 'Levi\u2019s',
    tag: 'Software Development • 2026',
    tagline: '"Quality never goes out of style"',
    imageAlt: 'Dark denim jacket and sneaker product image for a Levis collection',
    imageSrc: '/images/home/project-levis.png',
  },
  {
    title: 'Queen of Seduction',
    tag: 'Branding • 2026',
    tagline: '"Smell Unique"',
    imageAlt: 'Luxury fragrance bottle mockup for a launch campaign',
    imageSrc: '/images/home/project-fragrance.png',
  },
] as const;

export const homeServiceCards = [
  {
    number: '01',
    title: 'Marketing',
    description:
      'Reach your ideal customers and grow your business with our tailored marketing solutions. Let us help you craft a powerful message and connect with your target audience.',
    tone: 'light',
  },
  {
    number: '02',
    title: 'Web Design',
    description:
      'Your website is the virtual front door to your business. Let us create a stunning and user-friendly design that captivates your audience and drives conversions.',
    tone: 'dark',
  },
  {
    number: '03',
    title: 'Branding',
    description:
      'Your brand is more than just a name or logo, it\u2019s a promise to your customers. Let us help you build a brand that communicates your values and resonates with your target audience.',
    tone: 'light',
  },
  {
    number: '04',
    title: 'Web Development',
    description:
      'Transform your ideas into reality with our custom software development services. Our team of experts will bring your vision to life and create solutions that streamline your business processes.',
    tone: 'dark',
  },
] as const;

export const homeImpactMetrics = [
  { value: '40+', label: 'Clients served' },
  { value: '90%', label: 'Success score' },
  { value: '10+', label: 'Years of expertise' },
] as const;

export const homeSocialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: '/icons/home/instagram.svg' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '/icons/home/linkedin.svg' },
  { label: 'X', href: 'https://x.com', icon: '/icons/home/x.svg' },
] as const;

export const homeFooterLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#work' },
] as const;

export const homeAssetPaths = {
  logo: '/images/home/sprintLab-logo.svg',
  logoWhite: '/images/home/logo-wite.svg',
  heroArtwork: '/images/home/hero-artwork.png',
  heroArtworkMobile: '/images/home/artwork-mobile.png',
  heroBackgroundArtwork: '/images/home/hero-artwork.png',
  storyPhoto: '/images/home/team-story.jpg',
  ctaArtwork: '/images/home/cta-artwork.png',
  footerMark: '/images/home/logo-wite.svg',
  avatar1: '/images/home/avatar-1.png',
  avatar2: '/images/home/avatar-2.png',
  avatar3: '/images/home/avatar-3.png',
  avatar4: '/images/home/avatar-4.png',
  avatar5: '/images/home/avatar-5.png',
  arrowUpIcon: '/icons/home/arrow-up.svg',
  looper: '/images/home/Looper-1.svg',
} as const;
