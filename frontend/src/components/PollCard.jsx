import { Link } from 'react-router-dom'

function PollCard({ poll }) {
    const totalVotes = poll.options.reduce((sum, o) => sum + o.votes, 0)
    return (
        <Link to={`/polls/${poll.id}`} style={{ display: 'block', border: '1px solid #ddd', borderRadius: 8, padding: 12, marginBottom: 10 }}>
            {poll.imageUrl && (
                <img src={poll.imageUrl} alt="" style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
            )}
            <div>{poll.title}</div>
            <div style={{ fontSize: 12, color: '#888' }}>{poll.authorNickname} · 투표 {totalVotes}개</div>
        </Link>
    )
}

export default PollCard