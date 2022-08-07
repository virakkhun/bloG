export interface PostBody {
  userId: number
  id?: number
  title: string
  body: string
}
export interface IPost {
  isLoading: boolean
  post: PostBody[]
}
