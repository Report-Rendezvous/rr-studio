'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/lib/components/ui/card'
import { Input } from '@/lib/components/ui/input'
import { useFormState } from 'react-dom'
import { submitNameAction } from '@/lib/actions'
import { FormSubmitButton } from '@/lib/components/formSubmitButton'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { UserProfileUsecase } from 'packages/usecase'
import { UserName } from 'packages/domain'
import { UserGateway } from 'packages/gateway'
import { UserDriver } from '@/lib/api/userDriver'

export const UserNameForm: React.FC<{ userName: string }> = ({ userName }) => {
  const result = UserProfileUsecase({
    userRepository: UserGateway({ driver: UserDriver() })
  }).fetchUserProfileByName(UserName.of(userName))

  const initialState = {
    message: null,
    data: null,
    errorMessage: null
  }
  const [state, dispatch] = useFormState(submitNameAction, initialState)
  const [name, setName] = useState('')

  useEffect(() => {
    if (state.data) {
      setName(state.data)
      toast.success('Profile Updated.')
    }
  }, [state])

  return (
    <form action={dispatch}>
      <Card>
        <CardHeader>
          <CardTitle>Your Display Name</CardTitle>
          <CardDescription>
            Please enter your full name or a display name you are comfortable
            with.
          </CardDescription>
          <CardDescription>
            You can change the name displayed on RR-STUDIO, but please note that
            this name is used for your author profile and cannot be changed for
            the URL that displays your articles (e.g., &quot;/
            {'{'}your-id{'}'}/articles/{'{'}article-id
            {'}'}&quot;).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Input
              id="name"
              name="name"
              type="text"
              className="w-[400px]"
              value={name}
              size={32}
              onChange={(e) => setName(e.target.value)}
            />
            {state.errorMessage ? (
              <p
                id=":re4:-form-item-message"
                className="text-[0.8rem] font-medium text-destructive"
              >
                {state.errorMessage}
              </p>
            ) : null}
          </div>
        </CardContent>
        <CardFooter>
          <FormSubmitButton>
            <span>Save</span>
          </FormSubmitButton>
        </CardFooter>
      </Card>
    </form>
  )
}
