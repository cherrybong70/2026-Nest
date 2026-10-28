import { useState } from 'react'
import { useApp } from '../context/AppContext'
import CategoryTabs from '../components/CategoryTabs'
import PollCard from '../components/PollCard'
import { Link, useNavigate } from 'react-router-dom'

function Feed() {
    const { polls } = useApp()
    const [category, setCategory] = useState(null)
    const [token, setToken] = useState(() => localStorage.getItem('token'))
    const navigate = useNavigate()

    const filtered = category ? polls.filter((p) => p.categoryId === category) : polls

    function handleLogout() {
        localStorage.removeItem('token')
        setToken(null)
        navigate('/')
    }

    return (
        <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/"><h2>Nest</h2></Link>
                {token ? (
                    <button onClick={handleLogout}>로그아웃</button>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </div>
            <Link to="/polls/new">+ 투표 작성</Link>
            <CategoryTabs value={category} onChange={setCategory} />
            {filtered.map((poll) => (
                <PollCard key={poll.id} poll={poll} />
            ))}
        </div>
    )
}

export default Feed