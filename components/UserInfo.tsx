import { useQueryUser } from '../hooks/useQueryUser'
import { Loader } from '@mantine/core'

export const UserInfo = () => {
  const { data: user, status } = useQueryUser()
  // Loadingの際はLoadingコンポーネントを表示する
  if (status === 'loading') return <Loader />
  return <p>{user?.email}</p>
}