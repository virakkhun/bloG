import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Spinner from '../../components/assets/Spinner'
import PostButton from '../../components/posts/PostButton'
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
      <div className="mt-10 flex justify-center w-full">
        <div className="flex flex-col items-center">
          <p className="text-default">Loading posts...</p>
          <Spinner />
        </div>
      </div>
    )
  }

  if (post.length === 0) {
    return (
      <div className="flex flex-col gap-1.5 justify-center items-center w-full h-screen">
        <p>Create a post to share with everyone.</p>
        <Link
          to="/post/create"
          className="text-action hover:text-default transition-all flex items-center gap-2 mb-md"
        >
          <span>Start post</span>
        </Link>
      </div>
    )
  }

  return (
    <>
      <head>
        <meta property="og:description" content="Welcome to Blog" />
        <title>All Posts - bloG</title>
      </head>
      <div className="text-primary my-10 w-full">
        <div className="w-full relative z-10">
          {post.map((p) => (
            <div key={p.id}>
              <PostComponent
                body={p.body}
                id={p.id ? p.id : 0}
                title={p.title}
                slug={p.slug}
                isShowCommentButton={true}
                authorImage={p.authorImage}
                userName={p.name}
                userId={p.authorId}
                image={p.images}
              />
            </div>
          ))}
          <div className="sticky bottom-0 w-full">
            <PostButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
