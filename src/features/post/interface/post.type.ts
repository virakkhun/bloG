export interface PostBody {
  id?: number
  slug: string
  title: string
  body: string
  authorId: string
}
export interface IPost {
  isLoading: boolean
  post: PostBody[]
}
