import { CATEGORIES } from '../mock/data'

function CategoryTabs({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <button onClick={() => onChange(null)} style={{ fontWeight: value === null ? 'bold' : 'normal' }}>
        전체
      </button>
      {CATEGORIES.map((c) => (
        <button key={c.id} onClick={() => onChange(c.id)} style={{ fontWeight: value === c.id ? 'bold' : 'normal' }}>
          {c.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs