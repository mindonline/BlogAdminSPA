import {Component, OnInit, Inject} from '@angular/core';
import {PostService} from "../shared/post.service";
import {IPostShort} from "../shared/post.model";


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  providers: [PostService]
})

export class PostsListComponent implements OnInit {

  public posts : IPostShort[];

  constructor(
    @Inject(PostService) private postService:PostService
  ) {
    this.posts = this.postService.getAllPostsShort();
  }

  ngOnInit() {

  }

}
