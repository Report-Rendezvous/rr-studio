import { ArticleCard } from '@/lib/components/articleCard'
import { Button } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { Input } from '@/lib/components/ui/input'
import { NewArticleButton } from '@/lib/components/newArticleButton'

export default async function DocumentsPage() {
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
        <ArticleCard title="タイトル" />
        <ArticleCard title="タイトル" />
      </div>
    </div>
  )
}
