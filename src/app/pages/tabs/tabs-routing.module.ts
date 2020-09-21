import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'contact' },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: '../avatar/avatar.module#AvatarPageModule',
      },
      {
        path: 'setting',
        loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule',
      },
      {
        path: 'contact',
        loadChildren: '../lista/lista.module#ListaPageModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
