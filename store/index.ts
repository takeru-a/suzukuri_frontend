import create from 'zustand'
import { BookForm } from '../types'

type State = {
  postBook: BookForm
  updateBookinfo: (payload: BookForm) => void
  resetBookinfo: () => void
}

const useStore = create<State>((set) => ({
  postBook: { id: 0, title: '', description: '' },
  updateBookinfo: (payload) =>
    set({
      postBook: {
        id: payload.id,
        title: payload.title,
        description: payload.description,
      },
    }),
  resetBookinfo: () =>
    set({ postBook: { id: 0, title: '', description: '' } }),
}))
export default useStore