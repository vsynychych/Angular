import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {FullPostComponent} from './full-post/full-post.component';
import {PostService} from '../services/post.service';
import {HttpClientModule} from '@angular/common/http';


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
