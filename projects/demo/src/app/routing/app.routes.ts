import { Routes } from '@angular/router';
import {HomePageComponent} from '../pages/home-page.component';
import {ComponentsPageComponent} from '../pages/components/components-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home'
  },
  {
    path: 'components',
    component: ComponentsPageComponent,
    title: 'Components'
  }
];
