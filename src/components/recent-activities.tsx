import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import ShortPost from './short-posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-12'>
      <h2 className='mb-4 font-serif text-2xl font-bold'>Recent Activities</h2>

      {posts.length > 0 ? (
        <>
          <ShortPost posts={posts} />
          <div className='mt-8 text-center'>
            <Link
              href='/activities'
              className='text-muted-foreground transition-colors hover:text-foreground'
            >
              All posts
            </Link>
          </div>
        </>
      ) : (
        <p className='text-center text-muted-foreground'>
          No Recent Activities Available
        </p>
      )}
    </section>
  )
}
