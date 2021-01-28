import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'users', component: UsersComponent, children: [
          {
            path: ':id', component: FullUserComponent
          }
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {
            path: ':id', component: FullPostComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
