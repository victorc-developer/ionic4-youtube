import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey = 'AIzaSyDv-IZKnbMbUD3I28njnBT2VhHl9G88HOM';
 
  constructor(public http: HttpClient) { }
 
  getPlaylistsForChannel(channel) {
    let url = 'https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20';

    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(url, httpOptions)
    .pipe(
      retry(3),
      tap( // Log the result or error
        data => console.log('getPlaylistsForChannel', data),
        error => console.log('getPlaylistsForChannel error: ', JSON.stringify(error))
      ),
      catchError(this.handleError)
    );
  }
 
  getListVideos(listId) {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20';

    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(url, httpOptions)
    .pipe(
      tap( // Log the result or error
        data => console.log('getListVideos', data),
        error => console.log('getListVideos error', JSON.stringify(error))
      )
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
