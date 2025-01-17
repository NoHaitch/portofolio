import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { getProjectBySlug, getProjects } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import TechIcons from '@/components/tech-icons'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(project => ({ slug: project.slug }))
}

interface ProjectProps {
  params: { slug: string }
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params

  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { title, image, author, publishedAt, repository, techUsed } =
    project.metadata;

  return (
    <section className='container max-w-5xl py-24'>
      <Link
        href='/projects'
        className='mb-8 inline-flex items-center gap-2 text-sm font-light'
      >
        <ArrowLeftIcon className='size-5' />
      </Link>

      {image && (
        <div className='relative mb-6 aspect-video w-full overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title || ''}
            className='object-cover'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            quality={85}
          />
        </div>
      )}

      <header>
        <h1 className='title'>{title}</h1>
        <div className='flex items-center gap-2 text-sm font-light text-muted-foreground'>
          {author && `${author} / `}
          {formatDate(publishedAt ?? '')}
        </div>

        {repository && (
          <div className='mt-2 flex gap-1'>
            <p>Repository:</p>
            <Link
              href={repository}
              className='underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              {repository}
            </Link>
          </div>
        )}

        {techUsed && (
          <div className='mt-2 flex flex-wrap gap-1'>
            <TechIcons
              techs={techUsed}
              iconClassName='size-4'
              containerClassName='rounded-sm bg-zinc-300 dark:bg-zinc-700 p-1'
            />
          </div>
        )}
      </header>

      <main className='prose mt-16 max-w-none dark:prose-invert'>
        <MDXContent source={project.content} />
        {repository && (
          <Link
            href={`${repository}/blob/main/README.md`}
            className='mt-4 inline-block underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            For More Information, Check out this GitHub README
          </Link>
        )}
      </main>
    </section>
  )
}
