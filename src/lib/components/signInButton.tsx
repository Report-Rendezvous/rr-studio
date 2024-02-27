import { Button } from '@/lib/components/ui/button'
import Link from 'next/link'

export function SignInButton() {
  return (
    <Link href="/login">
      <Button className="text-white">Sign In</Button>
    </Link>
  )
}
