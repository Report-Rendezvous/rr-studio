import { Button } from '@/lib/components/ui/button'
import Link from 'next/link'

export function SignInButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <Button className="text-white">Sign In</Button>
    </Link>
  )
}
