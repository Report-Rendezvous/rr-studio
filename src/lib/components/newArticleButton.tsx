'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { ArticleRepository } from 'report-rendezvous-domain'
import { ArticleCommand } from 'report-rendezvous-usecase'
import { ArticleGateway } from 'report-rendezvous-gateway'
import { ArticleDriver } from '@/lib/api/articleDriver'
import { useState } from 'react'

interface NewArticleButtonProps extends ButtonProps {}

export function NewArticleButton({ ...props }: NewArticleButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const gateway: ArticleRepository = ArticleGateway({
    driver: ArticleDriver()
  })
  const usecase = ArticleCommand({ articleRepository: gateway })

  async function onClick() {
    setIsLoading(true)
    const temporaryId = await usecase.createTemporaryArticle('userid')
    setIsLoading(false)
    router.refresh()
    router.push(`/editor/${temporaryId.value}`)
  }

  return (
    <Button
      onClick={onClick}
      className={cn({
        'cursor-not-allowed opacity-60': isLoading
      })}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New Article
    </Button>
  )
}
