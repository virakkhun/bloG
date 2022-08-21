export interface IUser {
  id?: string
  email: string
  name: string
  age: number
  gender: string
  authorImage: string
  status: boolean
}

export interface IUpdateIUser extends Partial<IUser> {}
