import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'
import { IUpdateIUser, IUser } from '../interface/user.type'

export const UpdateUserInfoService = async (
  payload: IUpdateIUser & { query: string }
): Promise<IResponse<IUpdateIUser, IUser>> => {
  const update = await useApiWrapper<IUpdateIUser>(
    `/user/update?id=${payload.query}`,
    'POST',
    {
      age: payload.age,
      email: payload.email,
      gender: payload.gender,
      name: payload.name,
      status: payload.status
    }
  )

  return update.json()
}
