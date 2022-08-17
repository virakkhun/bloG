import { Link } from 'react-router-dom'
import Icons from '../Icons/Icons'

interface Props {
  userId?: number
  id: number
  title: string
  body: string
  slug: string
}

const PostComponent: React.FC<Props> = ({ body, id, title, slug }: Props) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-center">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNX4CoibsumcPmroIZGQVRSfOR0xJTdqSQOt4KtjCXqEkRzy_rJZLXvOBDpdMl5b4DS0&usqp=CAU"
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
        />
        <p>Avatar</p>
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
      <Link to="#">comments</Link>
    </div>
    <hr className="mb-4" />
  </div>
)

export default PostComponent
