import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { openModal } from '../../features/modal/close-modal.slice'
import { IUser } from '../../features/user/interface/user.type'
import Icons from '../Icons/Icons'
import ImageUpload from './ImageUpload'

const UserProfile: React.FC<IUser> = ({
  age,
  email,
  gender,
  image,
  name,
  status
}) => {
  const { isShow } = useSelector((state: RootState) => state.modalcontrol)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="w-full relative">
      <div className="flex justify-center mt-10">
        <div
          className={
            status
              ? 'relative border-2 w-24 h-24 flex justify-center items-center rounded-full border-green-600'
              : 'relative border-2 w-24 h-24 flex justify-center items-center rounded-full border-red-600'
          }
        >
          <img
            src={image}
            alt={image}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div onClick={() => dispatch(openModal())}>
            <Icons
              name="camera"
              style="h-5 w-5 absolute bottom-0 right-1 bg-white rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="text-primary font-bold text-lg mt-4 text-center">{name}</p>
      <div className="flex items-center gap-2 mt-10 pb-2 border-b-2 border-b-gray-300 w-full">
        <Icons name="info" style="w-7 h-7" />
        <p>Info</p>
      </div>
      <div className="flex justify-between items-center py-4 pl-2 border-b-2 border-b-gray-300">
        <p>{email}</p>
        <Icons name="edit" style="h-5 w-5" />
      </div>
      <div className="flex justify-between items-center py-4 pl-2 border-b-2 border-b-gray-300">
        <p>{gender}</p>
        <Icons name="edit" style="h-5 w-5" />
      </div>
      <div className="flex justify-between items-center py-4 pl-2 border-b-2 border-b-gray-300">
        <p>{age}</p>
        <Icons name="edit" style="h-5 w-5" />
      </div>
      {isShow ? (
        <div className="absolute top-0 w-full h-full bg-black text-default">
          <ImageUpload />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default UserProfile
