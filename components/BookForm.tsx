import { FormEvent } from 'react'
import { TextInput, Button, Center } from '@mantine/core'
import { IconDatabase } from '@tabler/icons'
import useStore from '../store'
import { useMutateBook } from '../hooks/useMutateBook'

export const BookForm = () => {
  const { postBook } = useStore()
  const update = useStore((state) => state.updateBookinfo)
  const { createBookMutation } = useMutateBook()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (postBook.id === 0)
      createBookMutation.mutate({
        title: postBook.title,
        description: postBook.description,
      })
    // else {
    //   updateBookMutation.mutate({
    //     id: postBook.id,
    //     title: postBook.title,
    //     description: postBook.description,
    //   })
    // }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          mt="md"
          placeholder="title"
          value={postBook.title || ''}
          onChange={(e) => update({ ...postBook, title: e.target.value })}
        />
        <TextInput
          mt="md"
          placeholder="description"
          value={postBook.description || ''}
          onChange={(e) =>
            update({ ...postBook, description: e.target.value })
          }
        />
        <Center mt="lg">
          <Button
            disabled={postBook.title === ''}
            leftIcon={<IconDatabase size={14} />}
            color="cyan"
            type="submit"
          >
            {postBook.id === 0 ? 'Create' : 'Update'}
          </Button>
        </Center>
      </form>
    </>
  )
}