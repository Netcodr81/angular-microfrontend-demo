import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { TODO_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(TODO_ROUTES)]
};
