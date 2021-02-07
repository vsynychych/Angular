import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {FullPostComponent} from './full-post/full-post.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {
        path: ':id', component: FullPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
