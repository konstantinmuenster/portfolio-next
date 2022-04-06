export type NavigationItem = {
  to: string;
  label: string;
};

export const headerNavigation: NavigationItem[] = [
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
];

export const footerNavigation: NavigationItem[] = [
  {
    to: '/contact',
    label: 'Contact',
  },
  {
    to: '/transparency',
    label: 'Transparency',
  },
  {
    to: '/imprint',
    label: 'Imprint',
  },
];
