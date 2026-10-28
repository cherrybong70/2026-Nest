import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { CATEGORIES } from '../mock/data'

function PollCreate() {
    const { createPoll } = useApp()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [categoryId, setCategoryId] = useState(CATEGORIES[0].id)
    const [options, setOptions] = useState([
        { text: '', imageUrl: null },
        { text: '', imageUrl: null },
    ])

    function updateOptionText(i, value) {
        setOptions((prev) => prev.map((o, idx) => (idx === i ? { ...o, text: value } : o)))
    }

    function updateOptionImage(i, file) {
        if (!file) return
        setOptions((prev) => prev.map((o, idx) => (idx === i ? { ...o, imageUrl: URL.createObjectURL(file) } : o)))
    }

    function addOption() {
        if (options.length < 4) setOptions((prev) => [...prev, { text: '', imageUrl: null }])
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!title.trim() || options.some((o) => !o.text.trim())) {
            alert('제목과 선택지를 모두 입력해주세요.')
            return
        }
        const id = createPoll({ title, categoryId, options })
        navigate(`/polls/${id}`)
    }

    return (
        <div style={{ padding: 16 }}>
            <h2>투표 작성</h2>
            <form onSubmit={handleSubmit}>
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                    {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="질문 제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: 8, margin: '8px 0' }}
                />

                {options.map((opt, i) => (
                    <div key={i} style={{ marginBottom: 8 }}>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder={`선택지 ${i + 1}`}
                                value={opt.text}
                                onChange={(e) => updateOptionText(i, e.target.value)}
                                style={{ width: '100%', padding: '8px 40px 8px 8px', boxSizing: 'border-box' }}
                            />
                            <label
                                style={{
                                    position: 'absolute',
                                    right: 6,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    fontSize: 16,
                                }}
                            >
                                📷
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => updateOptionImage(i, e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        </div>
                        {opt.imageUrl && (
                            <img src={opt.imageUrl} alt="" style={{ width: 160, borderRadius: 8, marginTop: 6 }} />
                        )}
                    </div>
                ))}
                {options.length < 4 && (
                    <button type="button" onClick={addOption}>+ 선택지 추가</button>
                )}
                <button type="submit" style={{ display: 'block', marginTop: 16, padding: 10, width: '100%' }}>
                    투표 올리기
                </button>
            </form>
        </div>
    )
}

export default PollCreate