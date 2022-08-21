import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IComment } from '../interface/comment.type'

export const PostCommentService = async (
  payload: IComment
): Promise<IResponse<IComment>> => {
  const postComment = await useApiWrapper<IComment>('/comment/create', 'POST', {
    comment: payload.comment,
    postId: payload.postId
  })

  return await postComment.json()
}
