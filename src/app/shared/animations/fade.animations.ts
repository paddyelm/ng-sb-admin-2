import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInFadeOutAnimation = trigger('fadeInFadeOut', [
  transition('xxxx', [
    style(
      { opacity: 0, display: 'block' }
      // { backgroundColor: 'red' }
    ),
    animate('1000ms', style({ opacity: 1 })),
  ]),
  transition('yyyy', [
    animate(
      '1000ms',
      style(
        { opacity: 0 }
        // { backgroundColor: 'red' }
      )
    ),
    style(
      { display: 'none' }
      // { backgroundColor: 'blue' }
    ),
  ]),
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0, display: 'block' }),
    animate('1000ms', style({ opacity: 1 })),
  ]),
]);

export const fadeOutAnimation = trigger('fadeOutAnimation', [
  transition(':leave', [
    animate('1000ms', style({ opacity: 0 })),
    style({ display: 'none' }),
  ]),
]);
