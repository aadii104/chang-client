import { RouteInfo } from './settingSidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Gateway',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '2',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      {
        path: '/gateway',
        title: 'View Company',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
      },
      {
        path: '/gateway/addcompany',
        title: 'Add Company',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
  {
    path: '/settings/me',
    title: 'Me',
    icon: 'ft-mail',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: '/settings/edit',
    title: 'Profile Edit',
    icon: 'ft-home',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: '/settings/passwordchange',
    title: 'Password',
    icon: 'ft-mail',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: '/settings/managemail',
    title: 'Manage emails',
    icon: 'ft-message-square',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: '/settings/contributors',
    title: 'Contributers',
    icon: 'ft-message-square',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: '/settings/transactions',
    title: 'Transactions',
    icon: 'ft-message-square',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: '/settings/upgrade',
    title: 'Upgrade',
    icon: 'ft-file-text',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
  },
];
