interface Props {
  userId?: number
  id: number
  title: string
  body: string
}

const PostComponent: React.FC<Props> = ({ body, id, title }: Props) => (
  <div className="flex flex-col gap-2">
    <p className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
      <span className="text-primary font-bold">{id}</span>
    </p>
    <p className="truncate text-xl my-sm text-action">{title}</p>
    <p>{body}</p>
  </div>
)

export default PostComponent
