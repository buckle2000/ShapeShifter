import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'project',
    loadChildren: './modules/editor/editor.module#EditorModule',
  },
  {
    path: 'user/:id',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
