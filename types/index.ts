export type AuthForm = {
    email: string
    password: string
}

export type BookForm = {
    id: number
    title: string
    description : string
}

export type CommentForm = {
    BookId: number
    description : string
}