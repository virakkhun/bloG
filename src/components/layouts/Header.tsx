import { Link } from 'react-router-dom'
import Icons from '../../components/Icons/Icons'
const Header: React.FC = () => (
  <>
    <div className="flex justify-between items-center">
      <h1 className="underline text-default py-md">Weather Igni</h1>
      <div className="flex justify-between gap-md">
        <Link to="/">
          <Icons name="home" style="h-5 w-5 fill-default" />
        </Link>
        <Link to="/weather">
          <Icons name="weather" style="h-5 w-5 fill-default" />
        </Link>
        <a href={'https://github.com'}>
          <Icons name="github" style="h-5 w-5 fill-secondary" />
        </a>
      </div>
    </div>
  </>
)

export default Header
