import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: '[app-main-top-nav]',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './main-top-nav.component.html',
  styleUrl: './main-top-nav.component.scss',
})
export class MainTopNavComponent {}
