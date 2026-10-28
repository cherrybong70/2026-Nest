import { useState } from 'react'
import { useApp } from '../context/AppContext'
import CategoryTabs from '../components/CategoryTabs'
import PollCard from '../components/PollCard'
import {Link} from 'react-router-dom'

function Feed() {
    const { polls } = useApp()
    const [category, setCategory] = useState(null)

    const filtered = category ? polls.filter((p) => p.categoryId === category) : polls

    return (
        <div style={{ padding: 16 }}>
            <Link to="/"><h2>Nest</h2></Link>
            <Link to="/polls/new">+ 투표 작성</Link>
            <CategoryTabs value={category} onChange={setCategory} />
            {filtered.map((poll) => (
                <PollCard key={poll.id} poll={poll} />
            ))}
        </div>
    )
}

export default Feed