export const useGetPostService = async () => {
  const fetchPost = await fetch('/post')
  const response = await fetchPost.json()

  return await response
}
