import {
  Balenciaga,
  Shades,
  Boss,
  Levis,
  CocaCola,
  Tudor,
  Balenciaga2,
  Balenciaga3,
  Balenciaga4,
  Balenciaga5,
} from '../asset';

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  category: string;
  year: string;
  country: string;
  scope: string;
  image: string;
  gridClass: string;
  detailImages: string[];
  description: string[];
  videoLink: string;
}

export const projects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Balenciaga',
    subtitle: 'Luxury Fashion Rebrand',
    quote: '"It\'s different"',
    category: 'Web Design',
    year: '2026',
    country: 'Austria',
    scope: 'Brand Identity, Brand Strategy, Product Design, Web Development',
    image: Balenciaga,
    gridClass: 'lg:col-span-2',
    detailImages: [Balenciaga2, Balenciaga3, Balenciaga4, Balenciaga5],
    videoLink: 'https://www.youtube.com/embed/OqhV8Juiz94?si=VAAD5XECfxbk1QN1',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Porttitor cursus purus aenean lectus donec vestibulum sem elementum. Fermentum at sit dictumst quis id. A dolor odio sed varius eu egestas condimentum. Diam ridiculus ut arcu eget facilisis vitae sed nullam. Eu rutrum volutpat nec suspendisse ipsum eu tortor ullamcorper sed.Et id lorem duis nulla nisl cras nec. Urna scelerisque aliquet egestas nunc augue. Feugiat sodales adipiscing metus tincidunt. Ante at orci egestas dignissim donec ut condimentum. Tellus sed adipiscing urna amet turpis non duis augue. Sit cursus laoreet ornare lectus lacinia tristique interdum sit. Eget nibh egestas viverra dignissim tellus volutpat nulla non. Hac duis pulvinar gravida nisl sed. Turpis nisl consequat risus at quis.',
      'Lorem ipsum dolor sit amet consectetur. Porttitor cursus purus aenean lectus donec vestibulum sem elementum. Fermentum at sit dictumst quis id. A dolor odio sed varius eu egestas condimentum. Diam ridiculus ut arcu eget facilisis vitae sed nullam. Eu rutrum volutpat nec suspendisse ipsum eu tortor ullamcorper sed.Et id lorem duis nulla nisl cras nec. Urna scelerisque aliquet egestas nunc augue. Feugiat sodales adipiscing metus tincidunt. Ante at orci egestas dignissim donec ut condimentum. Tellus sed adipiscing urna amet turpis non duis augue.',
    ],
  },
  {
    id: '2',
    title: 'Shades',
    subtitle: 'E-Commerce Platform',
    quote: '"Be Unique"',
    category: 'Branding',
    year: '2026',
    country: 'United Kingdom',
    scope: 'Brand Identity, E-Commerce Development',
    image: Shades,
    gridClass: 'lg:col-span-1',
    detailImages: [Shades, Shades],
    videoLink: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus eleifend felis vestibulum dictum id quis arcu.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    ],
  },
  {
    id: '3',
    title: 'Hugo Boss',
    subtitle: 'Campaign Design',
    quote: '"Smell Unique"',
    category: 'Branding',
    year: '2026',
    country: 'Germany',
    scope: 'Campaign Design, Art Direction',
    image: Boss,
    gridClass: 'lg:col-span-1',
    detailImages: [Boss, Boss],
    videoLink: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus eleifend felis vestibulum dictum id quis arcu.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    ],
  },
  {
    id: '4',
    title: "Levi's",
    subtitle: 'Digital Experience',
    quote: '"Quality never goes out of style"',
    category: 'Software Development',
    year: '2026',
    country: 'USA',
    scope: 'Digital Experience, App Development',
    image: Levis,
    gridClass: 'lg:col-span-2',
    detailImages: [Levis, Levis],
    videoLink: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus eleifend felis vestibulum dictum id quis arcu.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    ],
  },
  {
    id: '5',
    title: 'Coca-Cola',
    subtitle: 'Social Media Campaign',
    quote: '"Open Happiness"',
    category: 'Software Development',
    year: '2026',
    country: 'USA',
    scope: 'Social Media Campaign, Interactive Design',
    image: CocaCola,
    gridClass: 'lg:col-span-2',
    detailImages: [CocaCola, CocaCola],
    videoLink: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus eleifend felis vestibulum dictum id quis arcu.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    ],
  },
  {
    id: '6',
    title: 'Tudor',
    subtitle: 'Brand Identity',
    quote: '"Born for a purpose"',
    category: 'Branding',
    year: '2026',
    country: 'Switzerland',
    scope: 'Brand Identity, Web Design',
    image: Tudor,
    gridClass: 'lg:col-span-1',
    detailImages: [Tudor, Tudor],
    videoLink: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut purus eleifend felis vestibulum dictum id quis arcu.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    ],
  },
];
