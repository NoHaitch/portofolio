import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import ShortPost from './short-posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)
  return (
    <section className='pb-12'>
      <div>
        <h2 className='title mb-8 text-2xl'>Recent Activities</h2>

        {posts.length !== 0 ? (
          <>
            <ShortPost posts={posts} />
            <div className='mt-4 inline-flex w-full items-center justify-center gap-2 text-muted-foreground'>
              <Link href='/activities'>All posts</Link>
            </div>
          </>
        ) : (
          <span className='mt-4 inline-flex w-full items-center justify-center gap-2 text-muted-foreground'>
            No Recent Activities Available
          </span>
        )}
      </div>
    </section>
  )
}
