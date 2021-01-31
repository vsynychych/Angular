import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {HomeComponent} from './components/home/home.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostResolveService, UserResolveService} from './services';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService}, children: [
      {
        path: ':id', component: FullUserComponent
      }
    ]
  },
  {
    path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}, children: [
      {
        path: ':id', component: FullPostComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    FullUserComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
