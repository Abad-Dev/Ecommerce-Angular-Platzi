import { Routes } from '@angular/router';
import { ListComponent } from './modules/products/pages/list/list.component';
import { AboutComponent } from './modules/info/pages/about/about.component';
import { NotfoundComponent } from '@shared/pages/notfound/notfound.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { DetailComponent } from './modules/products/pages/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'product/:id',
                component: DetailComponent
            },
            {
                path: '**',
                component: NotfoundComponent
            }
        ]
    }
];
