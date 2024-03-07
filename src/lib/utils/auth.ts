import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (user) {
        return true
      }
      return false
    },
    async redirect(params) {
      if (params.url === '/api/auth/signin') {
        return '/login'
      }
      return params.baseUrl
    },
    async session({ session, token, user }) {
      return session
    },
    async jwt({ token, account }) {
      if (account && account.access_token) {
        token.accessToken = account.access_token
      }
      return token
    }
  }
}
