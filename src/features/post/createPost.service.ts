import { PostBody } from './post.type'

export const CreatePostService = async (payload: any | PostBody) => {
  const createPost = await fetch('/post', {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  const response = await createPost.json()

  return await response
}
