import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import PostComponent from '../../components/posts/PostComponet'
import { fetchPosts } from '../../features/post/getPostSlice'

const Post: React.FC = () => {
  const { post, isLoading } = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch<AppDispatch>()
  const effect = useRef(true)

  useEffect(() => {
    if (effect.current) {
      effect.current = false
      dispatch(fetchPosts())
    }
  }, [])

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  return (
    <div className="text-default">
      <p className="mb-md">
        Yewh Hewh... We got{' '}
        <span className="text-action">{post.length.toString()}</span> here mate!
      </p>
      <div className="grid grid-cols-2 gap-3">
        {post.map((p) => (
          <div key={p.id} className="bg-secondary p-3 rounded-md">
            <PostComponent body={p.body} id={p.id} title={p.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
