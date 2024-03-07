const apiHost = process.env.SELF_API_URL

export type ProfileJson = { name: string; email: string }

export function UserDriver() {
  return {
    fetchProfileByName: async (
      userName: string
    ): Promise<ProfileJson | null> => {
      const response = await fetch(`${apiHost}/api/accounts/${userName}`, {
        cache: 'no-cache'
      })

      if (!response.ok) {
        return null
      }

      return response.json()
    }
  }
}
