import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function ActivitiesPage() {
  const posts = await getPosts()
  
  return (
    <section className='pb-24 pt-40'>
      <div className="container max-w-4xl">
        <h1 className="title mb-8">Activities</h1>
        <Posts posts={posts} />
      </div>
    </section>
  )
}
