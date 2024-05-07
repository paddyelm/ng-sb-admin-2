import { Component, HostListener, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInFadeOutAnimation } from '../../../animations/fade.animations';

@Component({
  selector: 'app-btn-scroll-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-scroll-up.component.html',
  styleUrl: './btn-scroll-up.component.scss',
  animations: [fadeInFadeOutAnimation],
})
export class BtnScrollUpComponent {
  /**
   * If this scroll button visible
   */
  isVisible: boolean = false;

  tester: string = 'Test';

  constructor(private ngZone: NgZone) {}

  /**
   * Fades the this component in and out depending on its scroll position.
   * Top screen fade, out bottom fade in.
   *
   * @param event the scroll event
   */
  @HostListener('window:scroll', ['$event'])
  onDocumentScroll(event: any) {
    console.log('SCROLLING ', window.scrollY);
    if (window.scrollY > 100) {
      this.ngZone.run(() => {
        this.tester = 'IS VISIBLE';
        this.isVisible = true;
      });

      console.log(this.tester);
    } else {
      this.ngZone.run(() => {
        this.tester = 'NOT VISABLE';
        this.isVisible = false;
      });

      console.log(this.tester);
    }
  }
}
