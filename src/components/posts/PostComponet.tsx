import { Link } from 'react-router-dom'
import Icons from '../Icons/Icons'
import React from 'react'

interface Props {
  userId?: string
  id?: number
  title: string
  body: string
  slug: string
  isShowCommentButton?: boolean
  authorImage?: string
  userName?: string
  status?: boolean
  image?: string
}

const PostComponent: React.FC<Props> = ({
  body,
  id,
  title,
  slug,
  isShowCommentButton,
  authorImage,
  userName,
  image
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src={authorImage}
            className="w-10 h-10 object-center rounded-full border border-gray-300 object-cover"
            alt={authorImage?.split(/-|.|_/g)[-1]}
          />
          <p>{userName}</p>
        </div>
        <div>
          <Icons name="dot" style="fill-primary h-5 w-5" />
        </div>
      </div>
      <p className="truncate text-xl my-sm text-action">{title}</p>
      <img
        src={image}
        alt={image?.split(/-|.|_/g)[-1]}
        className='w-full h-full object-contain'
      />
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
