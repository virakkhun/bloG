import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'

export const useGetPostService = async (): Promise<IResponse<[]>> => {
  const fetchPost = await useApiWrapper('/post/all','GET')

  return await fetchPost.json()
}
