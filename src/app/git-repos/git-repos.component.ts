import { Component, OnInit } from '@angular/core';
import { GitrepoService } from '../shared/gitrepo.service';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {
  userName: string = "johnpapa";
  getProfileResp: any = [];
  getRepos: any;
  selected_page: any;

  currentPage = 1;
  contentLoaded: boolean = false;
  constructor(private _service: GitrepoService) { }


  ngOnInit(): void {
    // setInterval(()=>{
    //   this.contentLoaded = true
    //   this.getProfile();

    // },4000)

  }


  getProfile() {
    this._service.getUser(this.userName).subscribe(getUserResponse => {
      this.getProfileResp = getUserResponse;
      this.contentLoaded = true;
      this.getRepositories();
    })
  }
  getRepositories() {
    this._service.getRepos(this.userName).subscribe(getReposResponse => {
      console.log("entering", this.selected_page)
      this.contentLoaded = true
      this.getRepos = getReposResponse;
    })
  }


}
