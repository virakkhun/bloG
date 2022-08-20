export interface IUser {
  id?: string
  email: string
  name: string
  age: number
  gender: string
  image: string
  status: boolean
  password?: string
}

export interface IUpdateIUser extends Partial<IUser> {}
