import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Spinner from '../../components/assets/Spinner'
import { createPost } from '../../features/post/createPostSlice'
import { userInfo } from '../../utils/storage/userInfo'

const CreatePost: React.FC = () => {
  document.title = 'Create Post'
  let navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const { isLoading } = useSelector((state: RootState) => state.createPost)
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    if (title === '' && desc === '') return
    await dispatch(
      createPost({
        body: desc,
        title: title,
        authorId: userInfo().id,
        slug: `#${title}_`
      })
    ).then(() => {
      navigate('/post')
    })
  }
  if (!isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col gap-5 md:w-1/3 w-full"
        >
          <div className="flex flex-col gap-2">
            <input
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Title"
              className="bg-transparent text-default p-2 border-b border-1 hover:shadow-lg outline-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              id="desc"
              placeholder="Description"
              className="bg-transparent text-default p-2 border-b border-1 hover:shadow-lg outline-none focus:outline-none"
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="rounded-md bg-action w-full py-1 hover:text-action hover:bg-secondary transition-all"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col justify-center items-center gap-3 w-full h-screen">
        <p className="text-default">Loading...</p>
        <Spinner />
      </div>
    )
  }
}

export default CreatePost
