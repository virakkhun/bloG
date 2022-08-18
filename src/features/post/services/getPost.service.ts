import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IPost, PostBody } from '../interface/post.type'

export const useGetPostService = async (): Promise<
  IResponse<[], PostBody[]>
> => {
  const fetchPost = await useApiWrapper('/post/all', 'GET')

  return await fetchPost.json()
}
