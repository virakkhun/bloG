import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { ILogin } from '../interface/login.type'

export const LoginService = async (
  payload: ILogin
): Promise<IResponse<ILogin, string>> => {
  const response = await useApiWrapper<ILogin>('/auth/login', 'POST', {
    email: payload.email,
    password: payload.password
  })

  return await response.json()
}
