import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

interface ShortPostProps {
  posts: PostMetadata[]
}

export default function ShortPost({ posts }: ShortPostProps) {
  return (
    <ul className='flex flex-col gap-4'>
      {posts.map(post => (
        <li
          key={post.slug}
          className='w-full rounded-lg bg-zinc-200 px-4 py-2 transition-transform hover:scale-105 dark:bg-zinc-800'
        >
          <Link
            href={`/activities/${post.slug}`}
            className='flex items-center justify-between gap-4'
          >
            <p className='line-clamp-1 flex-grow text-lg font-semibold'>
              {post.title}
            </p>
            {post.publishedAt && (
              <p className='shrink-0 text-right text-xs font-light text-muted-foreground sm:text-sm'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
