import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IPostDetail } from '../interface/post.type'

export const GetPostDetailService = async (
  id: string
): Promise<IResponse<IPostDetail, IPostDetail>> => {
  const response = await useApiWrapper(`/post/detail?postId=${id}`, 'GET')

  return await response.json()
}
