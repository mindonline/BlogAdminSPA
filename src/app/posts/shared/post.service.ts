import {Injectable} from '@angular/core';
import {IPost, IPostShort} from "./post.model";
import {PostResource} from "./post.resource";

@Injectable()
export class PostService {

  constructor(
    private postResource : PostResource
  ) {

  }

  public getAllPostsShort(): IPostShort[]{

    return this.postResource.query();


  }
}
