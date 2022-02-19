import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitrepoService {

  clientId = '1e8cddce2e4bc23f234b';
  clientSecret = 'b0fce61a100732ccccc781bbad25321fe5bea185';

  page: number = 1;
  item_per_page: number = 100;
  constructor(private http: HttpClient) { }

  getUser(userName: string) {
    return this.http.get('https://api.github.com/users/' + userName + '?client_id='
      + this.clientId + '&client_secret=' + this.clientSecret).pipe(map(res => res));
  }

  getRepos(userName: string) {
    return this.http.get('https://api.github.com/users/' + userName + '/repos?client_id='
      + this.clientId + '&client_secret=' + this.clientSecret + '?page=' + this.page + '&per_page=' + this.item_per_page + '\&page=1;rel="next"').pipe(map(res => res));
  }
  
}
