import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IRegister } from '../interface/register.type'

export const RegisterService = async (
  payload: IRegister
): Promise<IResponse<IRegister>> => {
  const response = await useApiWrapper<IRegister>('/user/create', 'POST', {
    email: payload.email,
    password: payload.password
  })

  return await response.json()
}
