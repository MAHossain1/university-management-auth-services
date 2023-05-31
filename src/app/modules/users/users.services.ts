import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utlis'

const createUser = async (user: IUser) => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // Default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
