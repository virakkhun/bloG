import { IComment } from '../../features/comment/comment.type'

interface Props extends Partial<IComment> {}

const Comment: React.FC<Props> = ({ comment, postId }) => {
  return (
    <div className="py-1 my-2 w-full">
      <p className="mb-1">{comment}</p>
      <hr />
    </div>
  )
}

export default Comment
