export type ProfileJson = { name: string; email: string }

export function UserDriver() {
  return {
    fetchProfileByName: async (
      userName: string
    ): Promise<ProfileJson | null> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/accounts/${userName}`,
        {
          cache: 'no-cache'
        }
      )

      if (!response.ok) {
        return null
      }

      return response.json()
    }
  }
}
