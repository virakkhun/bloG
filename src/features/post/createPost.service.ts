import { PostBody } from './post.type'

export const CreatePostService = async (payload: any | PostBody) => {
  const base_url = import.meta.env.VITE_JSON_PLACE
  const createPost = await fetch(base_url, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  const response = await createPost.json()

  return await response
}
