import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

interface PostProps {
  params: { slug: string }
}

export default async function Post({ params }: PostProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { title, image, author, publishedAt } = post.metadata

  return (
    <section className='container max-w-4xl py-24'>
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
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      )}

      <header>
        <h1 className='title'>{title}</h1>
        <div className='flex items-center gap-2 text-sm font-light text-muted-foreground'>
          {author && `${author} / `}
          {formatDate(publishedAt ?? '')}
        </div>
      </header>

      <main className='prose mt-16 max-w-none dark:prose-invert'>
        <MDXContent source={post.content} />
      </main>
    </section>
  )
}
