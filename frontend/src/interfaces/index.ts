export interface Todo {
  _id?: string
  title: string
  description: string
  done?: boolean
  createdBy?: string
  createDate?: Date
}

export interface User {
  _id?: string
  name?: string
  email: string
  password: string
}