export type NavigationItem = {
  to: string;
  label: string;
};

export const headerNavigation: NavigationItem[] = [
  {
    to: 'https://google.com/blog',
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
