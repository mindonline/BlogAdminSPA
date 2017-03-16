export interface IPostShort {
  _id  : string,
  title : string,
  tags : Array<string>
}

export interface IPost extends  IPostShort {
  text : string
}

