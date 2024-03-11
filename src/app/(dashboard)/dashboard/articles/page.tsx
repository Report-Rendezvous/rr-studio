import { ArticleCard } from '@/lib/components/articleCard'
import { Button } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { Input } from '@/lib/components/ui/input'
import { NewArticleButton } from '@/lib/components/newArticleButton'
import { usersArticle } from 'report-rendezvous-usecase'
import { AccountGateway, ArticleGateway } from 'packages/gateway'
import { AccountDriver } from '@/lib/api/accountDriver'
import { ArticleDriver } from '@/lib/api/articleDriver'
import { getCurrentUser } from '@/lib/utils/session'
import { redirect } from 'next/navigation'
import { AccountEmail, Article } from 'report-rendezvous-domain'

export default async function ArticlesManagePage() {
  const user = await getCurrentUser()
  if (!user) {
    return redirect('/login')
  }

  const usecase = usersArticle({
    accountRepository: AccountGateway({ driver: AccountDriver() }),
    articleRepository: ArticleGateway({ articleDriver: ArticleDriver() })
  })

  const articles = await usecase.execute(new AccountEmail(user.email || ''))

  return (
    <div>
      <h1 className="text-4xl py-4">Own Articles</h1>
      <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <NewArticleButton />

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search Title, Topics" />
          <Button>
            <Icons.search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 pt-0">
        article total: {articles.length}
        {articles.map((article: Article, index: number) => {
          return (
            <ArticleCard
              article={{
                id: article.id.value,
                title: article.title,
                draft: false,
                revisionDate: article.createdAt
              }}
              key={index}
            />
          )
        })}
        <ArticleCard
          article={{
            title: 'title1',
            id: '1',
            draft: true,
            revisionDate: '2024-03-09'
          }}
        />
        <ArticleCard
          article={{
            title: 'title2',
            id: '2',
            draft: true,
            revisionDate: '2024-03-09'
          }}
        />
      </div>
    </div>
  )
}
