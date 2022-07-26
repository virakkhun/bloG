import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import CreatePost from './pages/Post/create'
import DefaultLayout from './layouts/DefaultLayout'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Auth/login'
import Register from './pages/Auth/register'
import Error from './pages/error'
import PostDetail from './pages/Post/detail'
import Profile from './pages/User'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/user" element={<Profile />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
