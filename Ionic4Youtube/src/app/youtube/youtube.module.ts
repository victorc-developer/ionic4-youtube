import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { YoutubePage } from './youtube.page';
import { YoutubeService } from './services/youtube.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: YoutubePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [YoutubePage],
  providers: [
    YoutubeVideoPlayer,
    YoutubeService
  ]
})
export class YoutubePageModule {}
