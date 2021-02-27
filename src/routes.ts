import {Welcome, Contact, About} from './pages'
export const routes = [
  {
    id: 1,
    exact: true,
    showInHeader: true,
    linkText: 'Home',
    path: '/',
    component: Welcome,
  },
  {
    id: 2,
    exact: true,
    showInHeader: true,
    linkText: 'About',
    path: '/about',
    component: About,
  },
  {
    id: 3,
    exact: true,
    showInHeader: true,
    linkText: 'Contact',
    path: '/contact',
    component: Contact,
  },
]
