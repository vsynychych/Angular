import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {FullPostComponent} from './full-post/full-post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from '../services';


@NgModule({
  declarations: [PostComponent, PostsComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [PostService],
  exports: [HttpClientModule]
})
export class PostModule {
}
