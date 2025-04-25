import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { TasksService } from './features/tasks/tasks.service';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TasksServiceBackend } from './features/tasks/tasks.service.backend';
import { TasksServiceLocal } from './features/tasks/tasks.service.local';
import { authInterceptor } from './features/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: TasksService, // Ensure TasksService is a valid class or token
      useClass: environment.useApi ? TasksServiceBackend : TasksServiceLocal
    }
  ],
  
};
