import { IComment } from '../../features/comment/interface/comment.type'

interface Props extends Partial<IComment> {}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="py-1 my-2 w-full">
      <p className="mb-1">{comment}</p>
      <hr />
    </div>
  )
}

export default Comment
