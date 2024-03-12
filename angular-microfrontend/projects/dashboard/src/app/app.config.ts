import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DASHBOARD_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(DASHBOARD_ROUTES)]
};
