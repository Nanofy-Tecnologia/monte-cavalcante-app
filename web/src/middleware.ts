import { withAuth } from 'next-auth/middleware'

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
})


export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
}
