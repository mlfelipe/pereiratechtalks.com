import { getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Comunidad',
      href: '/about',
    },
    {
      text: 'Meetups',
      href: '/meetups',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      links: [
        {
          text: 'WhatsApp',
          href: 'https://chat.whatsapp.com/EzYAadvUWyVBHt3m1FU77U',
        },
        {
          text: 'Telegram',
          href: 'https://t.me/PerTechTalks',
        },
        {
          text: 'YouTube',
          href: 'https://www.youtube.com/@pereiratechtalks',
          target: '_blank',
        },
        {
          text: 'Instagram',
          href: 'https://www.instagram.com/pertechtalks/',
          target: '_blank',
        },
        {
          text: 'X (Twitter)',
          href: 'https://x.com/PerTechTalks',
          target: '_blank',
        },
      ],
    },
  ],
};

export const eventsHeaderData = {
  links: [
    {
      text: 'Meetups',
      href: '/meetups',
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://chat.whatsapp.com/EzYAadvUWyVBHt3m1FU77U',
      target: '_blank',
    },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/PerTechTalks', target: '_blank' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/PerTechTalks', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/pertechtalks/',
      target: '_blank',
    },
    {
      ariaLabel: 'Youtube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@pereiratechtalks',
      target: '_blank',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/pereira-tech-talks/',
      target: '_blank',
    },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made with ♥️  by <a href="https://github.com/orgs/pereira-tech-talks/people" target="_blank" rel="noopener noreferrer"><b>Pereira Tech Talks</b></a> Team · All rights reserved.
  `,
  links: [],
  secondaryLinks: [],
};
