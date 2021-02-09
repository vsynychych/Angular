import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {PostResolveService} from './services/post-resolve.service';
import { EditIDPipe } from './editID.pipe';
import { GreenDirective } from './green.directive';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    FullPostComponent,
    PostsComponent,
    EditIDPipe,
    GreenDirective,
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
