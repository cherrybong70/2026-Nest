import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Login from './pages/Login'
import OAuthCallback from './pages/OAuthCallback'
import PollDetail from './pages/PollDetail'
import PollCreate from './pages/PollCreate'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oauth/callback" element={<OAuthCallback />} />
      <Route path="/polls/:id" element={<PollDetail />} />
      <Route path="/polls/new" element={<PollCreate />} />
    </Routes>
  )
}

export default App