import client from "./client";
import { User } from '../../interfaces/index'

export const signup = (user: User) => {
  return client.post('/user/signup', user)
}

export const signin = (user: User) => {
  return client.post('/user/signin', user)
}