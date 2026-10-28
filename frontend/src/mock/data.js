export const CATEGORIES = [
  { id: 'fashion', name: '패션' },
  { id: 'daily', name: '일상 고민' },
  { id: 'relationship', name: '관계 고민' },
  { id: 'etc', name: '기타' },
]

export const INITIAL_POLLS = [
  {
    id: 'p1',
    categoryId: 'fashion',
    title: '옷 A vs 옷 B, 뭐가 나아?',
    authorNickname: '익명3210',
    options: [
      { id: 'o1', text: 'A', votes: 12 },
      { id: 'o2', text: 'B', votes: 9 },
    ],
  },
  {
    id: 'p2',
    categoryId: 'daily',
    title: '내일 7시 기상인데 지금 자야 할까, 밤새야 할까?',
    authorNickname: '익명7742',
    options: [
      { id: 'o1', text: '잠깐이라도 자기', votes: 34 },
      { id: 'o2', text: '그냥 밤새기', votes: 11 },
    ],
  },
  {
    id: 'p3',
    categoryId: 'relationship',
    title: '친구랑 싸웠는데 누가 맞다고 생각해?',
    authorNickname: '익명1029',
    options: [
      { id: 'o1', text: '내가 맞음', votes: 21 },
      { id: 'o2', text: '친구가 맞음', votes: 6 },
    ],
  },
]