import { UserPort } from '@/lib/port/userPort'

export const fetchUserProfileById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/users/${id}`)
  if (!response.ok) {
    return Promise.resolve(null)
  }
  return response.json()
}

export const UserGateway: UserPort = {
  fetchUserProfileById
}
