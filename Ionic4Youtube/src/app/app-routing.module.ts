import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  { path: 'youtube', loadChildren: './youtube/youtube.module#YoutubePageModule' },
  { path: 'youtube', loadChildren: './youtube/youtube.module#YoutubePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
