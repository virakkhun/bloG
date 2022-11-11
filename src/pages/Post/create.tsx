import React, { useRef, useState } from 'react'
import Loading from '../../components/assets/Loading'
import Icons from '../../components/Icons/Icons'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import { createPost } from '../../features/post/createPostSlice'
import { userInfo } from '../../utils/storage/userInfo'
import { Helmet } from 'react-helmet'

const CreatePost: React.FC = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0
  })
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [slug, setSlug] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [file, setFile] = useState<File | any>()
  const { isLoading } = useSelector((state: RootState) => state.createPost)
  const dispatch = useDispatch<AppDispatch>()
  const effect = useRef(true)

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    if (effect.current) {
      effect.current = false
      if (title === '' && desc === '' && slug === '') return
      let formData = new FormData()
      formData.append('body', desc)
      formData.append('title', title)
      formData.append('slug', slug !== '' ? `#${slug}` : `#${title}`)
      formData.append('authorId', userInfo().id as string)
      formData.append('image', file, file.name)
      await dispatch(createPost(formData)).then(() => {
        if (!isLoading) {
          navigate('/')
        }
      })
    }
  }

  const loadImage = (file: FileList | null) => {
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

  return (
    <>
      <Helmet>
        <title>Create Post | bloG</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="bloG is a mini social media, a legit platform for everyone"
        />
        <meta
          name="keywords"
          content="mini platform, cambodia, siem reap, khmer, blog, khmer blog, kon khmer, KSK, khmer sl khmer"
        />
        <meta
          property="og:description"
          content="bloG is a mini social media, which make your day happier."
        />
        <meta property="og:title" content="bloG" />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content={window.location.hostname} />
      </Helmet>
      <div className="flex items-center w-full">
        <div className="w-full">
          <div className="mt-5 mb-5" onClick={() => navigate(-1)}>
            <Icons name="chevron-left" style="h-5 w-5 cursor-pointer" />
          </div>
          <div className="w-16 h-16 rounded-full">
            <img
              src={
                userInfo().authorImage
                  ? userInfo().authorImage
                  : 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png'
              }
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
                className="w-full bg-transparent text-primary p-2 border-b border-b-gray-300 outline-none focus:outline-none"
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
                className="w-full bg-transparent text-primary p-2 border-b border-b-gray-300 outline-none focus:outline-none"
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
                className="w-full bg-transparent text-primary p-2 border-b border-b-gray-300 outline-none focus:outline-none"
                autoComplete="none"
              />
            </div>
            {image !== '' ? (
              <img src={image} alt="preview image" />
            ) : (
              <div>
                <label
                  htmlFor="image"
                  className="flex justify-center items-center py-2 border border-dashed border-orange-400 rounded-md cursor-pointer"
                >
                  <Icons name="image" style="h-5 w-5 fill-primary" />
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={(e) => loadImage(e.target.files)}
                />
              </div>
            )}

            <div className="mt-5">
              <button
                type="submit"
                className="rounded-md bg-action w-full py-1 hover:text-action hover:bg-secondary transition-all flex justify-center items-center"
              >
                {isLoading ? <Loading /> : 'Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreatePost
