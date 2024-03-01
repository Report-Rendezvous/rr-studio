import { UserId, UserRepository } from 'report-rendezvous-domain'

const fetchUserProfileById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/users/${id}`)
  if (!response.ok) {
    return null
  }
  return response.json()
}

const saveUserName = async (opt: {
  id: UserId
  name: string
}): Promise<void> => {}

export const UserGateway: UserRepository = {
  fetchUserProfileById
}
