import { IUser } from '../../features/user/interface/user.type'

export const userInfo = () => {
  return JSON.parse(localStorage.getItem('userInfo')!) as IUser
}
