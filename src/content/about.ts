import { Team1, Team2, Team3, Team4, Team5, Team6 } from '../asset';

export const aboutHeroContent = {
  title: 'About Us',
  imageAlt: 'People watching sunset',
  imageSrc: '/images/home/team-story.jpg',
  overlayText: 'Building Brands',
  description: "At SprintLab Digital, we're passionate about building brands that stand out in today's competitive digital landscape. We specialize in crafting unique brand identities, creating engaging marketing campaigns, and developing innovative software solutions that drive results. Let us help you tell your story and connect with your audience in a meaningful way.",
};

export const aboutApproachCards = [
  {
    number: '01',
    title: 'Immersion & Vision',
    description: "Our team immerses themselves in your business to gain a deep understanding and develop a clear vision for success. Through collaboration and strategic planning, we create a roadmap for achieving your goals.",
    tone: 'light',
  },
  {
    number: '02',
    title: 'Conceive & Design',
    description: "From concept to design, our team blends creativity and technical expertise to bring your vision to life. We work closely with you to develop unique and engaging solutions that resonate with your target audience.",
    tone: 'dark',
  },
  {
    number: '03',
    title: 'Implementation & Testing',
    description: "Our skilled developers and quality assurance team work tirelessly to develop and rigorously test our solutions to ensure optimal performance and user experience. We utilize the latest technologies and best practices to deliver robust and scalable solutions.",
    tone: 'light',
  },
  {
    number: '04',
    title: 'Evaluate & Iterate',
    description: "We are committed to ongoing success and continual improvement. Through regular evaluation and iteration, we adapt our solutions to meet your evolving needs and help you stay ahead of the competition.",
    tone: 'dark',
  }
] as const;

export const aboutTeamContent = {
  description: "At SprintLab Digital, we gather creatives, strategists and deep tech developers who are dedicated to bringing your vision to life. With years of experience and a passion for innovation, we deliver stunning websites, functional software solutions, and effective marketing strategies to make a lasting impact on your business. Get to know the team.",
  members: [
    { name: 'Stephanie Liverani', role: 'Backend Developer', image: Team1 },
    { name: 'Phillip Martin', role: 'Senior Product Designer', image: Team2 },
    { name: 'Eugene Romanovski', role: 'Growth & Marketing', image: Team3 },
    { name: 'Mark Farias', role: 'Fullstack Developer', image: Team4 },
    { name: 'Grace Makum', role: 'Brand Designer', image: Team5 },
    { name: 'David Smith', role: 'Game Designer', image: Team6 },
  ]
};
