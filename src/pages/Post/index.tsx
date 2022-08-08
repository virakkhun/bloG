import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Spinner from '../../components/assets/Spinner'
import Icons from '../../components/Icons/Icons'
import PostComponent from '../../components/posts/PostComponet'
import { fetchPosts } from '../../features/post/getPostSlice'

const Post: React.FC = () => {
  const { post, isLoading } = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 w-full h-screen">
        <p className="text-default">Loading...</p>
        <Spinner />
      </div>
    )
  }

  return (
    <div className="text-default">
      <div className="flex justify-between items-center">
        <p className="mb-md">
          Yewh Hewh... We got{' '}
          <span className="text-action">{post.length.toString()}</span> here
          mate!
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
        {post.map((p) => (
          <div key={p.id} className="bg-secondary p-3 rounded-md">
            <PostComponent body={p.body} id={p.id!} title={p.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
