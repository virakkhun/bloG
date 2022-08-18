import { PostBody } from '../interface/post.type'
import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'

export const CreatePostService = async (
  payload: PostBody
): Promise<IResponse<PostBody>> => {
  const createPost = await useApiWrapper<PostBody>('/post/create', 'POST', {
    slug: payload.slug,
    title: payload.title,
    body: payload.body,
    authorId: payload.authorId
  })

  return await createPost.json()
}
