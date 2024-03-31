import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtilsService {
  //
  isSideMenuCollapsed: boolean = false;

  private CLASS_SIDEBAR_TOGGLED: string = 'sidebar-toggled';

  constructor() {}

  /**
   *
   * Toggles the side menu, shifting page content for multiple components
   *
   */
  toggleSideMenuCollapse() {
    console.log('HERE we are', '2');
    // remove body class
    document.body.classList.contains(this.CLASS_SIDEBAR_TOGGLED)
      ? document.body.classList.remove(this.CLASS_SIDEBAR_TOGGLED)
      : document.body.classList.add(this.CLASS_SIDEBAR_TOGGLED);

    this.isSideMenuCollapsed = !this.isSideMenuCollapsed;
  }
}
