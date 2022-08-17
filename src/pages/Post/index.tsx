import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Spinner from '../../components/assets/Spinner'
import Icons from '../../components/Icons/Icons'
import PostComponent from '../../components/posts/PostComponet'
import { fetchPosts } from '../../features/post/getPostSlice'

const Post: React.FC = () => {
  document.title = 'All Posts'
  const { post, isLoading } = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch<AppDispatch>()
  const effect = useRef(true)

  useEffect(() => {
    if(effect.current) {
      effect.current = false
      dispatch(fetchPosts())
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 w-full h-screen">
        <p className="text-default">Loading...</p>
        <Spinner />
      </div>
    )
  }


  else if(post) {
    return (
      <div className="text-default">
        <div className="flex justify-between items-center">
          <p className="mb-md flex items-center gap-2">
            Total posted:
            <span className="text-action">{post.length}</span>
          </p>
          <Link
            to="/post/create"
            className="text-action hover:text-default transition-all flex items-center gap-2 mb-md"
          >
            <span>Post Here</span>
            <Icons name="arrow-right-circle" style="w-5 g-5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {post.map((p,i) => (
            <div key={p.id} className="bg-secondary p-3 rounded-md">
              <PostComponent body={p.body} id={i+1} title={p.title} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-1.5 justify-center items-center w-full h-screen'>
      <p>No Data</p>
      <Link
        to="/post/create"
        className="text-action hover:text-default transition-all flex items-center gap-2 mb-md"
      >
        <span>Post Here</span>
      </Link>
    </div>
  )

}

export default Post
