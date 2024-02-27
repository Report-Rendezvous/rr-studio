'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/lib/components/ui/card'
import Link from 'next/link'

type ReportCardProps = {
  report: {
    id: string
    title: string
    thumbnail: string
  }
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <Card className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <CardHeader>
        <CardTitle>
          <Link href={`/articles/${report.id}`} className="hover:underline">
            {report.title}
          </Link>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>さむね</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
