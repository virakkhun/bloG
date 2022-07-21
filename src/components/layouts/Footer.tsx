import { author, name } from '../../../package.json'
const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-lg">
      <div className="flex items-center gap-2">
        <p className="text-action">Made with</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/214/214309.png"
          alt="heart"
          className="w-5 h-5"
        />
        <p>by {author.name}</p>
      </div>
    </div>
  )
}

export default Footer
