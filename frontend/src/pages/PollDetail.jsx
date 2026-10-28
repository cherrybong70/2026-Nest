import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'

function PollDetail() {
    const { id } = useParams()
    const { polls, vote } = useApp()
    const poll = polls.find((p) => p.id === id)
    const [votedOptionId, setVotedOptionId] = useState(null)

    if (!poll) return <div>존재하지 않는 투표예요.</div>

    const totalVotes = poll.options.reduce((sum, o) => sum + o.votes, 0)

    function handleVote(optionId) {
        vote(poll.id, optionId)
        setVotedOptionId(optionId)
    }

    return (
        <div style={{ padding: 16 }}>
            <Link to="/">← 피드로</Link>
            <h2>{poll.title}</h2>
            <p style={{ color: '#888' }}>{poll.authorNickname}</p>

            {poll.options.map((opt) => {
                const pct = totalVotes ? Math.round((opt.votes / totalVotes) * 100) : 0

                if (!votedOptionId) {
                    return (
                        <button
                            key={opt.id}
                            onClick={() => handleVote(opt.id)}
                            style={{ display: 'block', width: '100%', padding: 0, marginBottom: 8, overflow: 'hidden' }}
                        >
                            {opt.imageUrl && <img src={opt.imageUrl} alt="" style={{ width: 160, display: 'block', margin: '0 auto' }} />}
                            <div style={{ padding: 10 }}>{opt.text}</div>
                        </button>
                    )
                }

                return (
                    <div key={opt.id} style={{ marginBottom: 12 }}>
                        {opt.imageUrl && <img src={opt.imageUrl} alt="" style={{ width: 160, borderRadius: 8, marginBottom: 4 }} />}
                        <div>{opt.text} {opt.id === votedOptionId ? '(내 선택)' : ''} - {pct}%</div>
                        <div style={{ background: '#eee', height: 10, borderRadius: 5 }}>
                            <div style={{ background: '#639922', width: `${pct}%`, height: '100%', borderRadius: 5 }} />
                        </div>
                    </div>
                )
            })}
            <p>총 {totalVotes}명 참여</p>
        </div>
    )
}

export default PollDetail