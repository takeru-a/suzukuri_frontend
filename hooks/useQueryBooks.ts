import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Book } from '@prisma/client'

export const useQueryBooks = () => {
    const router = useRouter()
    // そのユーザが登録した本、記事を取得
    const getBooks = async () => {
      const { data } = await axios.get<Book[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/book`
      )
      return data
    }
    return useQuery<Book[], Error>({
      queryKey: ['books'],
      queryFn: getBooks,
      onError: (err: any) => {
        if (err.response.status === 401 || err.response.status === 403)
          router.push('/')
      },
    })
  }