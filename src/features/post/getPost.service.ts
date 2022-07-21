export const useGetPostService = async () => {
  const base_url = import.meta.env.VITE_JSON_PLACEHOLDER
  const fetchPost = await fetch(base_url)
  const response = await fetchPost.json()

  return await response
}
