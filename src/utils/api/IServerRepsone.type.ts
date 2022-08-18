export interface IServerResponse<T> {
  statusCode: number
  message: string
  data: T
}
