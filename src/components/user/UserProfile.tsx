import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { openModal } from '../../features/modal/close-modal.slice'
import { IUser } from '../../features/user/interface/user.type'
import Icons from '../Icons/Icons'
import ImageUpload from './ImageUpload'
import React, { useState } from 'react'
import EditInfo from './EditInfo'
import { UpdateUserInfo } from '../../features/user/update-user-info.slice'
import { userInfo } from '../../utils/storage/userInfo'
import { persist, UserInfoThunk } from '../../features/user/user-info.slice'
import Loading from '../assets/Loading'

const UserProfile: React.FC<IUser> = ({
  age,
  email,
  gender,
  authorImage,
  name,
  status
}) => {
  const [userAge, setUserAge] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userName, setUserName] = useState('')
  const { isShow } = useSelector((state: RootState) => state.modalcontrol)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isShowEditAge, setIsShowEditAge] = useState(false)
  const [isShowEditGender, setIsShowEditGender] = useState(false)
  const [isShowEditName, setIsShowEditName] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmitAge = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (userAge === '') return
    await dispatch(
      UpdateUserInfo({
        age: +userAge,
        query: userInfo().id ?? ''
      })
    ).then(() => {
      dispatch(UserInfoThunk(userInfo().email)).then(() => {
        persist()
        setIsSubmitting(false)
        setIsShowEditAge(false)
      })
    })
  }

  const handleSubmitGender = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (userGender === '') return
    await dispatch(
      UpdateUserInfo({
        gender: userGender,
        query: userInfo().id ?? ''
      })
    ).then(() => {
      dispatch(UserInfoThunk(userInfo().email)).then(() => {
        persist()
        setIsSubmitting(false)
        setIsShowEditGender(false)
        setUserGender('')
      })
    })
  }

  const handleSubmitName = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (userName === '') return
    await dispatch(
      UpdateUserInfo({
        name: userName,
        query: userInfo().id ?? ''
      })
    ).then(() => {
      dispatch(UserInfoThunk(userInfo().email)).then(() => {
        persist()
        setIsSubmitting(false)
        setIsShowEditName(false)
        setUserName('')
      })
    })
  }

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
            src={authorImage}
            alt={authorImage}
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
      <p
        className="text-primary font-bold text-lg mt-4 text-center"
        onClick={() => setIsShowEditName(true)}
      >
        {name}
      </p>
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
        <div
          className="cursor-pointer"
          onClick={() => setIsShowEditGender(true)}
        >
          <Icons name="edit" style="h-5 w-5" />
        </div>
      </div>
      <div className="flex justify-between items-center py-4 pl-2 border-b-2 border-b-gray-300">
        <p>{age}</p>
        <div onClick={() => setIsShowEditAge(true)} className="cursor-pointer">
          <Icons name="edit" style="h-5 w-5" />
        </div>
      </div>
      {isShow ? (
        <div className="absolute top-0 w-full h-full bg-black text-default">
          <ImageUpload />
        </div>
      ) : (
        ''
      )}
      {isShowEditAge ? (
        <div className="absolute top-0 w-full h-full flex justify-center flex-col bg-black px-4 text-primary">
          <EditInfo
            submit={handleSubmitAge}
            title="Edit Age"
            closeModal={() => setIsShowEditAge(false)}
            btnText={isSubmitting ? <Loading /> : 'Submit'}
            child={
              <input
                type="text"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                className="w-full py-2 px-1 border-primary border focus:border-gray-400 outline-none"
                placeholder="Enter your age"
              />
            }
          />
        </div>
      ) : (
        ''
      )}
      {isShowEditName ? (
        <div className="absolute top-0 w-full h-full flex justify-center flex-col bg-black px-4 text-primary">
          <EditInfo
            submit={handleSubmitName}
            title="Edit Age"
            closeModal={() => setIsShowEditAge(false)}
            btnText={isSubmitting ? <Loading /> : 'Submit'}
            child={
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full py-2 px-1 border-primary border focus:border-gray-400 outline-none"
                placeholder="Enter your name"
              />
            }
          />
        </div>
      ) : (
        ''
      )}
      {isShowEditGender ? (
        <div className="absolute top-0 w-full h-full flex justify-center flex-col bg-black px-4 text-primary">
          <EditInfo
            submit={handleSubmitGender}
            title="Edit Age"
            closeModal={() => setIsShowEditGender(false)}
            btnText={isSubmitting ? <Loading /> : 'Submit'}
            child={
              <div className="flex flex-col gap-3">
                <div>
                  <label
                    htmlFor="male"
                    className={userGender === 'male' ? 'text-green-500' : ''}
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    value="male"
                    onChange={(e) => setUserGender(e.target.value)}
                    className="hidden"
                    id="male"
                  />
                </div>
                <div>
                  <label
                    htmlFor="female"
                    className={userGender === 'female' ? 'text-green-500' : ''}
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    value="female"
                    onChange={(e) => setUserGender(e.target.value)}
                    className="hidden"
                    id="female"
                  />
                </div>
              </div>
            }
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default UserProfile
