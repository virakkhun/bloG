import { IUser } from '../../features/user/interface/user.type'
import Icons from '../Icons/Icons'

const UserProfile: React.FC<IUser> = ({
  age,
  email,
  gender,
  image,
  name,
  status
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-10">
        <div className="border-2 w-24 h-24 flex justify-center items-center rounded-full border-green-600">
          <img src={image} alt={image} className="w-20 h-20 rounded-full" />
        </div>
      </div>
      <p className="text-primary font-bold text-lg mt-4 text-center">{name}</p>
      <div className="flex items-center gap-2 mt-10 pb-2 border-b-2 border-b-gray-300 w-full">
        <Icons name="info" style="w-7 h-7" />
        <p>Info</p>
      </div>
      <div className="flex justify-between items-center py-2 pl-2 border-b-2 border-b-gray-300">
        <p>{email}</p>
        <Icons name="email" style="h-5 w-5" />
      </div>
      <div className="flex justify-between items-center py-2 pl-2 border-b-2 border-b-gray-300">
        <p>{gender}</p>
      </div>
      <div className="flex justify-between items-center py-2 pl-2 border-b-2 border-b-gray-300">
        <p>{age}</p>
      </div>
    </div>
  )
}

export default UserProfile
