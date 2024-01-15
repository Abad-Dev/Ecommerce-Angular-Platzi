import { Routes } from '@angular/router';
import { ListComponent } from './modules/products/pages/list/list.component';
import { AboutComponent } from './modules/info/pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
