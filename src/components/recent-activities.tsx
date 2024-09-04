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
        <Link
          href='/activities'
          className='mt-4 w-full inline-flex justify-center items-center gap-2 text-muted-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}
