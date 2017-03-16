import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsListComponent} from "./posts/posts-list/posts-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts-list',
    pathMatch: 'full'
  },
  {
    path: 'posts-list',
    component: PostsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
