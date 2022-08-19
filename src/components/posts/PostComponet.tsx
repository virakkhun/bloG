import { Link } from 'react-router-dom'
import Icons from '../Icons/Icons'

interface Props {
  userId?: string
  id?: number
  title: string
  body: string
  slug: string
  isShowCommentButton?: boolean
  userProfile?: string
  userName?: string
}

const PostComponent: React.FC<Props> = ({
  body,
  id,
  title,
  slug,
  isShowCommentButton,
  userProfile,
  userName
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${userProfile?.slice(
              1
            )}.png`}
            className="w-10 h-10 rounded-full border border-gray-300 object-cover"
          />
          <p>{userName}</p>
        </div>
        <div>
          <Icons name="dot" style="fill-primary h-5 w-5" />
        </div>
      </div>
      <p className="truncate text-xl my-sm text-action">{title}</p>
      <p>{body}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm cursor-pointer bg-primary px-1 text-white">
          {slug}
        </p>
        {isShowCommentButton ? (
          <Link to={`/post/${id}`} className="hover:text-action">
            comments
          </Link>
        ) : (
          ''
        )}
      </div>
      <hr className="mb-4" />
    </div>
  )
}

export default PostComponent
