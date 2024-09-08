import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-4xl'>
        <Link
          href='/activities'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='size-5' />
          <span>Back to activities</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header className=''>
          <h1 className='title'>{title}</h1>
          <div className='flex items-center gap-2 text-sm font-light text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? ' ')}
          </div>
        </header>

        <main className='prose mt-16 max-w-5xl dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
