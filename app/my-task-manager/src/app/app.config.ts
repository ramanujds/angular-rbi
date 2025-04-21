import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { TasksService } from './features/tasks/tasks.service';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TasksServiceBackend } from './features/tasks/tasks.service.backend';
import { TasksServiceLocal } from './features/tasks/tasks.service.local';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
    {
      provide: TasksService, // Ensure TasksService is a valid class or token
      useClass: environment.useApi ? TasksServiceBackend : TasksServiceLocal
    }
  ],
  
};
