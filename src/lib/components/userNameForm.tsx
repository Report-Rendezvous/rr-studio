'use client'
import { buttonVariants } from '@/lib/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/lib/components/ui/card'
import { Icons } from '@/lib/components/ui/icons'
import { Input } from '@/lib/components/ui/input'
import { Label } from '@/lib/components/ui/label'
import { cn } from '@/lib/utils/utils'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

type User = {
  id: string
  name: string
}

export const UserNameForm: React.FC<{ user: User }> = ({ user }) => {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsSaving(true)
    toast('Success Your Operation.', {
      description: 'Your name has been updated.'
    })
    setIsSaving(false)
    router.refresh()
  }

  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Your Name</CardTitle>
          <CardDescription>
            Please enter your full name or a display name you are comfortable
            with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input id="name" className="w-[400px]" size={32} />
          </div>
        </CardContent>
        <CardFooter>
          <button
            type="submit"
            className={cn(buttonVariants())}
            disabled={isSaving}
          >
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  )
}
