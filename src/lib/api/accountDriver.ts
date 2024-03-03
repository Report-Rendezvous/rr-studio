const apiHost = process.env.SELF_API_URL

export function AccountDriver() {
  return {
    createAccount: async (id: string, email: string) => {
      const response = await fetch(`${apiHost}/api/account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, email }),
        cache: 'no-cache'
      })

      if (!response.ok) {
        return response.json()
      }

      console.log('response', response)

      return response.json()
    }
  }
}
