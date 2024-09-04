import Link from 'next/link'
import Posts from './posts'
import { getPosts } from '@/lib/posts'
import ShortPost from './short-posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-8'>Recent Activities</h2>
        <ShortPost posts={posts} />
        <div className='mt-4 inline-flex w-full items-center justify-center gap-2 text-muted-foreground'>
          <Link href='/activities'>All posts</Link>
        </div>
      </div>
    </section>
  )
}
