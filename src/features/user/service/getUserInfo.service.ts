import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IUser } from '../interface/user.type'

export const useGetUserInfoService = async (email: string): Promise<IResponse<IUser>> => {
  const userInfo = await useApiWrapper<{email: string}>('/user/info', 'POST', {
    email: email
  })

  return userInfo.json()
}