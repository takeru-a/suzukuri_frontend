import { FC } from 'react'
import { List } from '@mantine/core'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { Book } from '@prisma/client'
import useStore from '../store'
// import { useMutateBook } from '../hooks/useMutateBook'

export const BookItem: FC<Omit<Book, 'createdAt' | 'updatedAt' | 'userId'>> = ({
  id,
  title,
  description,
}) => {
//   const update = useStore((state) => state.updateBookinfo)
//   const { deleteBookMutation } = useMutateBook()
  return (
    <List.Item>
      <div className="float-left mr-10">
        <PencilAltIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
        //   onClick={() => {
        //     update({
        //       id,
        //       title,
        //       description,
        //     })
        //   }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
        //   onClick={() => {
        //     deleteTaskMutation.mutate(id)
        //   }}
        />
      </div>
      <span>(title): {title} </span>
      <span>(description): {description}</span>
    </List.Item>
  )
}