import {provideServerRendering, withRoutes} from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { SERVER_ROUTES } from './routing/app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(
      withRoutes(SERVER_ROUTES),
    )
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
