import { useApiWrapper } from '../../../utils/api/ApiWrapper'
import { IResponse } from '../../../utils/api/IResponse'

export const UploadImageService = async (
  id: string,
  image: any
): Promise<IResponse<any>> => {
  console.log(image)
  const upload = await useApiWrapper<any>(
    `/user/upload?id=${id}`,
    'POST',
    image
  )

  return upload.json()
}
