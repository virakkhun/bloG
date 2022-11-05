import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IComment } from '../interface/comment.type'

export const GetCommentService = async (
  postId: string
): Promise<IResponse<any, IComment>> => {
  const comments = await useApiWrapper(`/comment/post?id=${postId}`, 'GET')

  return comments.json()
}
