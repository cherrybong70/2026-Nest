import { createContext, useContext, useState } from 'react'
import { INITIAL_POLLS } from '../mock/data'

const AppContext = createContext(null)

export function AppProvider({ children }) {
    const [polls, setPolls] = useState(INITIAL_POLLS)

    function vote(pollId, optionId) {
        setPolls((prev) =>
            prev.map((p) =>
                p.id !== pollId
                    ? p
                    : { ...p, options: p.options.map((o) => (o.id === optionId ? { ...o, votes: o.votes + 1 } : o)) }
            )
        )
    }

    function createPoll({ title, categoryId, options }) {
        const newPoll = {
            id: 'p' + Date.now(),
            categoryId,
            title,
            authorNickname: '익명' + Math.floor(1000 + Math.random() * 9000),
            options: options.map((opt, i) => ({ id: 'o' + i, text: opt.text, imageUrl: opt.imageUrl || null, votes: 0 })),
        }
        setPolls((prev) => [newPoll, ...prev])
        return newPoll.id
    }

    const value = { polls, vote, createPoll }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
    return useContext(AppContext)
}