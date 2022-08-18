import { Link } from 'react-router-dom'
import Icons from '../Icons/Icons'

const PostButton: React.FC = () => {
  return (
    <div>
      <Link
        to="/post/create"
        className="flex flex-col items-center w-full bg-black text-white py-2"
      >
        <Icons name="post" style="w-5 h-5" />
        <span>Post</span>
      </Link>
    </div>
  )
}

export default PostButton
