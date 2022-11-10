import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { closeModal } from '../../features/modal/close-modal.slice'
import { useGetUserInfoService } from '../../features/user/service/getUserInfo.service'
import { persist } from '../../features/user/user-info.slice'
import { getCookie } from '../../utils/storage/useCookie'
import { userInfo } from '../../utils/storage/userInfo'
import Loading from '../assets/Loading'
import Icons from '../Icons/Icons'

const BASE_URL = import.meta.env.VITE_BASE_URL

const ImageUpload = () => {
  const [image, setImage] = useState<string>('')
  const [file, setFile] = useState<any | File>()
  const [isUploading, setIsUploading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const LoadImage = async (file: FileList | null) => {
    if (file !== null) {
      const blob = URL.createObjectURL(file[0])
      const reader = new FileReader()
      reader.onload = () => {
        setImage(blob)
      }
      reader.readAsArrayBuffer(file[0])
      setFile(file[0])
    }
  }

  const uploadImage = async () => {
    setIsUploading(true)
    let formData = new FormData()
    formData.append('image', file, file.name)
    const response = await fetch(
      `${BASE_URL}/user/upload?id=${userInfo().id}`,
      {
        body: formData,
        headers: {
          Authorization: `Bearer ${
            getCookie('tk') !== '' ? getCookie('tk') : ''
          }`
        },
        method: 'POST'
      }
    )

    const data = await response.json()

    if (data.statusCode === 200) {
      useGetUserInfoService(userInfo().email).then((data) => {
        if (data.statusCode === 200) {
          localStorage.setItem('userInfo', JSON.stringify(data.data))
          setIsUploading(false)
          setImage('')
          dispatch(closeModal())
          dispatch(persist())
        }
      })
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center relative">
      <div className="w-1/2 h-1/2 rounded-md border border-dashed border-orange-400  flex justify-center items-center">
        <label
          htmlFor="image"
          className="flex flex-col justify-center items-center gap-2 cursor-pointer"
        >
          <span>Upload Profile</span>
          <Icons name="upload" style="w-5 h-5 fill-action" />
        </label>
        <input
          type="file"
          id="image"
          className="hidden"
          onChange={(e) => LoadImage(e.target.files)}
        />
      </div>
      <button
        className="px-4 py-1 text-default border border-default border-dashed"
        onClick={() => dispatch(closeModal())}
      >
        Cancel
      </button>
      {image !== '' ? (
        <div className="w-full h-full top-0 left-0 absolute">
          <img
            src={image}
            alt="preview image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 px-2 w-full">
            <button
              onClick={uploadImage}
              className="w-full py-1 bg-action text-primary border border-gray-200 flex justify-center items-center"
            >
              {isUploading ? <Loading /> : 'Submit'}
            </button>
          </div>
          <div
            className="absolute top-2 right-2"
            onClick={() => {
              URL.revokeObjectURL(image)
              setImage('')
            }}
          >
            <Icons name="cancel" style="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ImageUpload
