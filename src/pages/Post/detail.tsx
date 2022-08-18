import { useEffect, useRef, useState } from 'react'
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

const PostDetail: React.FC = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0
  })
  const navigate = useNavigate()
  const params = useParams()
  const [comment, setComment] = useState<string>('')
  const [isPosting, setIsPosting] = useState<boolean>(false)
  const { isLoading, post, user } = useSelector(
    (state: RootState) => state.postdetail
  )
  const dispatch = useDispatch<AppDispatch>()

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
      dispatch(getPostDetail(params.postId ?? ''))
    })
  }

  useEffect(() => {
    dispatch(getPostDetail(params.postId ?? ''))
  }, [])

  if (isLoading) {
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
    <div className="h-screen md:w-1/2 w-full">
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
          userProfile={user.image}
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
        {post.comment?.map((c) => (
          <Comment comment={c.comment} key={c.id} />
        ))}
      </div>
    </div>
  )
}

export default PostDetail
