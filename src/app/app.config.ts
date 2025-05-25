import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }), 
    importProvidersFrom(
      CommonModule,
      BrowserAnimationsModule,
      // TranslateLanModule
    ),
    provideRouter(
      routes,
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', 
        scrollPositionRestoration: 'enabled' 
      }),
      withEnabledBlockingInitialNavigation()
    ),

    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    // providePrimeNG({
    //   theme: {
    //     options: {
    //         darkModeSelector: false || 'none'
    //     }
    //   }
    // }),
  ]
};
