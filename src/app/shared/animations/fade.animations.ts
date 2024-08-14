import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInFadeOutAnimation = trigger('fadeInFadeOut', [
  transition('fadein', [
    style({ opacity: 0, display: 'block' }),
    animate(1000, style({ opacity: 1 })),
  ]),
  transition('fadeout', [
    animate(1000, style({ opacity: 0 })),
    style({ display: 'none' }),
  ]),
]);

// trigger('fade', [
//   transition('void => active', [
//     // using status here for transition
//     style({ opacity: 0 }),
//     animate(1000, style({ opacity: 1 })),
//   ]),
//   transition('* => void', [animate(1000, style({ opacity: 0 }))]),
// ]);

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
