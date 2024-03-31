import { CommonUtilsService } from '../../services/common-utils.service';
import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: '[app-main-top-nav]',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './main-top-nav.component.html',
  styleUrl: './main-top-nav.component.scss',
})
export class MainTopNavComponent {
  constructor(private commonUtilService: CommonUtilsService) {}

  /**
   *
   * Toggles the collapsing of the main side bar
   *
   */
  toggleCollapseMainSidebar() {
    console.log('HERE we are', '1');
    this.commonUtilService.toggleSideMenuCollapse();
  }
}
