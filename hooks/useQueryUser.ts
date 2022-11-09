import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { User } from '@prisma/client'

export const useQueryUser = () => {
  const router = useRouter()
  // password以外のユーザ情報を取得
  const getUser = async () => {
    const { data } = await axios.get<Omit<User, 'password'>>(
      `${process.env.NEXT_PUBLIC_API_URL}/user`
    )
    return data
  }
  return useQuery<Omit<User, 'password'>, Error>({
    queryKey: ['user'],
    queryFn: getUser,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403)
        router.push('/')
    },
  })
}