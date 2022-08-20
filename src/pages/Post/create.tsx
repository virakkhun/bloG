import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Loading from '../../components/assets/Loading'
import Icons from '../../components/Icons/Icons'
import { createPost } from '../../features/post/createPostSlice'
import { userInfo } from '../../utils/storage/userInfo'

const CreatePost: React.FC = () => {
  document.title = 'Create Post'
  window.scrollTo({
    behavior: 'smooth',
    top: 0
  })
  let navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [slug, setSlug] = useState<string>('')
  const { isLoading } = useSelector((state: RootState) => state.createPost)
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    if (title === '' && desc === '') return
    await dispatch(
      createPost({
        body: desc,
        title: title,
        authorId: userInfo().id as string,
        slug: slug !== '' ? slug : `#${title}_`
      })
    ).then(() => {
      if (!isLoading) {
        navigate('/')
      }
    })
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-full">
        <div className="mt-10 mb-5" onClick={() => navigate(-1)}>
          <Icons name="chevron-left" style="h-5 w-5 cursor-pointer" />
        </div>
        <div className="w-16 h-16 rounded-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            alt="profile"
            className="w-16 h-16 rounded-full border border-gray-300"
          />
        </div>
        <p className="mt-2">
          {userInfo().name === null ? 'Avatar' : userInfo().name}
          <span className="bg-black rounded-md text-white px-1 ml-2">
            {userInfo().status ? 'active' : 'sleep'}
          </span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">
          <div>
            <input
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Title..."
              className="w-full bg-transparent text-default focus:text-primary p-2 border-b border-b-gray-300 outline-none focus:outline-none"
              autoComplete="none"
            />
          </div>
          <div>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              type="text"
              id="title"
              placeholder="#Slug..."
              className="w-full bg-transparent text-default focus:text-primary p-2 border-b border-b-gray-300 outline-none focus:outline-none"
              autoComplete="none"
            />
          </div>
          <div>
            <textarea
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="desc"
              placeholder="Description"
              className="w-full bg-transparent text-default focus:text-primary p-2 border-b border-b-gray-300 outline-none focus:outline-none"
              autoComplete="none"
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="rounded-md bg-action w-full py-1 hover:text-action hover:bg-secondary transition-all flex justify-center items-center"
            >
              {isLoading ? <Loading /> : 'Post'}
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 md:block hidden"></div>
    </div>
  )
}

export default CreatePost
