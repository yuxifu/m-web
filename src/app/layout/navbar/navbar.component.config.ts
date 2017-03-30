import { MenuType, RouteInfo } from './navbar.component.metadata';

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', menuType: MenuType.BRAND },
  { path: 'heroes', title: 'Heroes', menuType: MenuType.LEFT },
  { path: 'graphics', title: 'Graphics', menuType: MenuType.RIGHT },
  { path: 'primeng', title: 'PrimeNG', menuType: MenuType.RIGHT },
  { path: 'experimental', title: 'Experimental', menuType: MenuType.RIGHT }
];
