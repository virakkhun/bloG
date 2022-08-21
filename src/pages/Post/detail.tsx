import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Loading from '../../components/assets/Loading'
import Spinner from '../../components/assets/Spinner'
import Comment from '../../components/comments/comment'
import Icons from '../../components/Icons/Icons'
import PostComponent from '../../components/posts/PostComponet'
import { PostComment } from '../../features/comment/post-comment.slice'
import { getPostDetail } from '../../features/post/getpostdetail.slice'
import { GetCommentThunk } from '../../features/comment/get-comment.slice'

const PostDetail: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [comment, setComment] = useState<string>('')
  const [isPosting, setIsPosting] = useState<boolean>(false)
  const { isLoading, post, user } = useSelector(
    (state: RootState) => state.postdetail
  )
  const { comments } = useSelector((state: RootState) => state.comments)
  const dispatch = useDispatch<AppDispatch>()
  const effect = useRef(true)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
      setIsPosting(!isPosting)
      await dispatch(
        PostComment({
          comment: comment,
          postId: params.postId ?? ''
        })
      ).then(() => {
        setComment('')
        setIsPosting(false)
        dispatch(GetCommentThunk(params.postId ?? ''))
      })
  }

  useEffect(() => {
    if(effect.current) {
      effect.current = false
      dispatch(getPostDetail(params.postId ?? ''))
      dispatch(GetCommentThunk(params.postId ?? ''))
    }
  }, [])

  if (isLoading && !isPosting) {
    return (
      <div className="w-full flex justify-center mt-10">
        <div>
          <p>Loading...</p>
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="my-5" onClick={() => navigate(-1)}>
        <Icons name="chevron-left" style="h-5 w-5 cursor-pointer" />
      </div>
      <div className="mt-5">
        <PostComponent
          body={post.body}
          id={post.id}
          slug={post.slug}
          title={post.title}
          userId={post.authorId}
          isShowCommentButton={false}
          userName={user.name}
          authorImage={user.authorImage}
          image={post.images}
        />
      </div>
      <div className="mt-5 relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="text-primary border border-primary px-1 py-2 w-full outline-none"
            placeholder="comment..."
          />
          {isPosting ? (
            <div className="absolute top-3 right-2">
              <Loading />
            </div>
          ) : (
            <button type="submit">
              <Icons
                name="airline"
                style={
                  comment === ''
                    ? 'h-5 w-5 cursor-not-allowed absolute top-3 right-2 opacity-50 rotate-90'
                    : 'absolute top-3 right-2 hover:fill-action fill-primary h-5 w-5 rotate-90 cursor-pointer transition-all'
                }
              />
            </button>
          )}
        </form>
      </div>

      <div>
        {
          comments.length === 0 ?
            <p className='text-center mt-3'>No Comments</p>
            :
            comments?.map((c) => (
              <Comment comment={c.comment} key={c.id} />
            ))
        }
      </div>
    </div>
  )
}

export default PostDetail
