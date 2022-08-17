import { IServerResponse } from '../../features/IServerRepsone.type'

export type IResponse<T> = IServerResponse  & T
