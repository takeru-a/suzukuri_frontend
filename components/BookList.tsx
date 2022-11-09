import { useQueryBooks } from '../hooks/useQueryBooks'
import { List, ThemeIcon, Loader } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import { BookItem } from './BookItem'

export const BookList = () => {
  const { data: books, status } = useQueryBooks()
  if (status === 'loading') return <Loader my="lg" color="cyan" />
  return (
    <List
      my="lg"
      spacing="sm"
      size="sm"
      icon={
        <ThemeIcon color="cyan" size={24} radius="xl">
          <IconCircleDashed size={16} />
        </ThemeIcon>
      }
    >
      {books?.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          description={book.description}
        />
      ))}
    </List>
  )
}
