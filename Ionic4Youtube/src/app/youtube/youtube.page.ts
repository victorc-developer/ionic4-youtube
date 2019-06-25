import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './services/youtube.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {

  channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID
  playlists: any;
 
  constructor(private ytProvider: YoutubeService, private youtube: YoutubeVideoPlayer) {
    console.log('constructor youtube');
   }
 
  ngOnInit() {
    console.log('searchPlaylists ngonInit');
    this.searchPlaylists();
  }

  async searchPlaylists() {
    console.log('searchPlaylists');

    this.ytProvider.getPlaylistsForChannel(this.channelId)
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      this.playlists = resp;
    }, error => {
      console.log("Error searchPlaylists: ", error);
    });
  }

  openVideo(videoId : string): void {
    this.youtube.openVideo(videoId);
  }

}
