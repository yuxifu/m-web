import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar.component.config';
import { MenuType } from './navbar.component.metadata';
import { AuthenticationService, UserService } from '../../_services/index'

@Component({
  moduleId: module.id + '',
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }

  public isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

  public getCurrentUserName() {
    return this.authService.getCurrentUserName();
  }

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  
}
