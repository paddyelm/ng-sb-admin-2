import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BtnScrollUpComponent } from './app/shared/components/btns/btn-scroll-up/btn-scroll-up.component';

bootstrapApplication(AppComponent, appConfig)
  .then((platformRef) => {
    platformRef.bootstrap(BtnScrollUpComponent);
  })
  .catch((err) => console.error(err));
