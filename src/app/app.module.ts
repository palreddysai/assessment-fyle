import { GitrepoService } from './shared/gitrepo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { GitReposComponent } from './git-repos/git-repos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { GithubProfileComponent } from './git-repos/github-profile/github-profile.component';
import { GithubRepositoriesComponent } from './git-repos/github-repositories/github-repositories.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    GitReposComponent,
    GithubProfileComponent,
    GithubRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
NgxSkeletonLoaderModule
  ],
  providers: [GitrepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
