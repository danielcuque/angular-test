import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { ContactComponent } from '../shared/pages/contact/contact.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withViewTransitions()),
        provideAnimations(),
    ]
};