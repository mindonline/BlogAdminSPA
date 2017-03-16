import {Injectable, Inject} from '@angular/core';
import {IPost, IPostShort} from './post.model';
import {ResourceParams, ResourceCRUD} from 'ng2-resource-rest';
import {AppConfig} from '../../app.config';
import {IMongoQueryInput} from "../../shared/api.service";

@Injectable()
@ResourceParams({
  url: AppConfig.apiHost + 'post'
})
export class PostResource extends ResourceCRUD<IMongoQueryInput, IPost, IPostShort> {

}


