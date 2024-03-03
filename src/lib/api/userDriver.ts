const apiHost = process.env.SELF_API_URL

export type ProfileJson = { name: string; email: string }

export function UserDriver() {
  return {
    fetchProfileById: async (userId: string): Promise<ProfileJson | null> => {
      const response = await fetch(`${apiHost}/api/users/${userId}`, {
        cache: 'no-cache'
      })

      if (!response.ok) {
        return null
      }

      return response.json()
    },
    fetchProfileByName: async (
      userName: string
    ): Promise<ProfileJson | null> => {
      const response = await fetch(`${apiHost}/api/users/${userName}`, {
        cache: 'no-cache'
      })

      if (!response.ok) {
        return null
      }

      return response.json()
    }
  }
}
