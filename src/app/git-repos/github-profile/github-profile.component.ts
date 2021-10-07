import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
@Input() getProfileResp:any=[];
@Input() contentLoaded:boolean;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.contentLoaded = true
    },4000)
  }

}
