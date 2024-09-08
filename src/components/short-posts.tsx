import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default function ShortPost({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-4'>
      {posts.map(post => (
        <li
          key={post.slug}
          className='w-full rounded-lg bg-[#e3e3e3] px-4 py-2 dark:bg-[#1b1b1b]'
        >
          <Link
            href={`/activities/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1'
          >
            <div className=''>
              <div className='flex justify-between'>
                <p className='text-md line-clamp-1 font-semibold'>
                  {post.title}
                </p>
                {post.publishedAt && (
                  <p className='mt-1 w-1/4 text-right text-sm font-light'>
                    {formatDate(post.publishedAt)}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
