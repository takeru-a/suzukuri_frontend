import { useRouter } from 'next/router'
import axios from 'axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { Book } from '@prisma/client'
import useStore from '../store'
import { BookForm } from '../types'

export const useMutateBook = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const reset = useStore((state) => state.resetBookinfo)

  const createBookMutation = useMutation(
    async (book: Omit<BookForm, 'id'>) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/book`,
        book
      )
      return res.data
    },
    {
      onSuccess: (res) => {
        const previousBooks = queryClient.getQueryData<Book[]>(['books'])
        if (previousBooks) {
          queryClient.setQueryData(['books'], [res, ...previousBooks])
        }
        reset()
      },
      onError: (err: any) => {
        reset()
        if (err.response.status === 401 || err.response.status === 403) {
          router.push('/')
        }
      },
    }
  )

  return { createBookMutation}
}