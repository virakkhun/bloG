import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { ILogin } from '../interface/login.type'
import { useGetUserInfoService } from '../../user/service/getUserInfo.service'

export const LoginService = async (
  payload: ILogin
): Promise<IResponse<ILogin>> => {
  const response = await useApiWrapper<ILogin>('/auth/login', 'POST',{
    email: payload.email,
    password: payload.password
  })

  return await response.json()
}
