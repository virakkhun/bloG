import { IComment } from '../../comment/interface/comment.type'
import { IUser } from '../../user/interface/user.type'

export interface PostBody {
  id?: number
  slug: string
  title: string
  body: string
  authorId: string
  comment?: IComment[]
  name?: string
  status?: string
  authorImage?: string
  images?: string
}
export interface IPost {
  post: PostBody[]
}

export interface IPostDetail {
  post: PostBody
  user: IUser
}
