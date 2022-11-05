import { IResponse } from '../../../utils/api/IResponse'
import { getCookie } from '../../../utils/storage/useCookie'

export const UploadImageService = async (
  id: string,
  image: any
): Promise<IResponse<any>> => {
  const res = await fetch(`/api/user/upload?id=${id}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${getCookie('tk')}`
    },
    body: image
  })

  return res.json()
}
