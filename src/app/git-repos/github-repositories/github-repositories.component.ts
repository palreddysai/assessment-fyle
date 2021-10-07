import { GitrepoService } from './../../shared/gitrepo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.css']
})
export class GithubRepositoriesComponent implements OnInit {
@Input() getRepos:any;
@Input() contentLoaded:boolean;
@Input() userName:string;

page = 1;
count ;
pageSize = 10;
totalPages = [10, 20, 40, 60, 80, 100,120];
  constructor( private _service:GitrepoService) { }

  ngOnInit(): void {
  }
  getRepositories (){
    this._service.getRepos(this.userName).subscribe( getReposResponse => {
      this.contentLoaded = true
      this.getRepos = getReposResponse;
    })
  }
  onTableDataChange(event){
    this.page = event;
    this.getRepositories();
  }

  onTableSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getRepositories();
  }
}
