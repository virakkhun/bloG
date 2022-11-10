import { PostBody } from '../interface/post.type'
import { IResponse } from '../../../utils/api/IResponse'
import { getCookie } from '../../../utils/storage/useCookie'
const BASE_URL = import.meta.env.VITE_BASE_URL
export const CreatePostService = async (
  payload: FormData
): Promise<IResponse<PostBody>> => {
  const createPost = await fetch(`${BASE_URL}/post/create`, {
    body: payload,
    headers: {
      Authorization: `Bearer ${getCookie('tk') !== '' ? getCookie('tk') : ''}`
    },
    method: 'POST'
  })

  return await createPost.json()
}
