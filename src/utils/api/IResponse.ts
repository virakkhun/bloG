import { IServerResponse } from './IServerRepsone.type'

export type IResponse<T, PayloadType = {}> = IServerResponse<PayloadType> & T
