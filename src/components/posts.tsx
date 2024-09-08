import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li
          key={post.slug}
          className='w-full rounded-lg bg-[#e3e3e3] p-4 dark:bg-[#1b1b1b]'
        >
          <Link
            href={`/activities/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1'
          >
            {post.image && (
              <div className='relative mb-4 h-96 w-full overflow-hidden rounded-lg'>
                <Image
                  src={post.image}
                  alt={post.title || ''}
                  className='object-cover'
                  fill
                />
              </div>
            )}
            <div className=''>
              <div className='flex justify-between'>
                <p className='text-lg font-semibold'>{post.title}</p>
                {post.publishedAt && (
                  <p className='mt-1 w-1/4 text-right text-sm font-light'>
                    {formatDate(post.publishedAt)}
                  </p>
                )}
              </div>
            </div>

            <div className='max-w-lg'>
              <p className='line-clamp-2 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
