import { IComment } from '../../comment/comment.type'
import { IUser } from '../../user/interface/user.type'

export interface PostBody {
  id?: number
  slug: string
  title: string
  body: string
  authorId: string
  comment?: IComment[]
}
export interface IPost {
  isLoading: boolean
  post: PostBody[]
}

export interface IPostDetail {
  post: PostBody
  user: IUser
}
