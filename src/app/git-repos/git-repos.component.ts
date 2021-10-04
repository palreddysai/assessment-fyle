import { Component, OnInit } from '@angular/core';
import { GitrepoService } from '../shared/gitrepo.service';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {
  userName:string = "johnpapa";
  getProfileResp : any = [];
  getRepos: any;
  selected_page:any;
  p:any;
  pageObj: any;
  currentPage = 1;
  contentLoaded: boolean = false;
  constructor(private _service: GitrepoService) {}


  ngOnInit(): void {
      this.getProfile();

  }


  getProfile (){
    this._service.getUser(this.userName).subscribe( getUserResponse => {
      this.getProfileResp = getUserResponse;
      this.contentLoaded = true;
      this.getRepositories();
    })
  }
  getRepositories (){
    this._service.getRepos(this.userName, this.selected_page).subscribe( getReposResponse => {
      console.log("entering",this.selected_page)
      this.contentLoaded = true
      this.getRepos = getReposResponse;
    })
  }
  onPageChanged(e) {
    this.pageObj = e.target.value;
  }

}
