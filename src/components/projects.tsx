import { ProjectMetadata } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import TechIcons from './tech-icons'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <div className='mb-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2'>
      {projects.map(project => (
        <div
          key={project.slug}
          className='group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-50 shadow-md transition-all hover:shadow-lg dark:bg-zinc-800/50'
        >
          <Link href={`/projects/${project.slug}`} className='block'>
            <div className='relative aspect-[16/9] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-700'>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                />
              )}
            </div>
            <div className='flex flex-col p-6'>
              <h2 className='line-clamp-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
                {project.title}
              </h2>
              <p className='mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300'>
                {project.description}
              </p>
              {project.techUsed && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  <TechIcons
                    techs={project.techUsed}
                    iconClassName='size-5'
                    containerClassName='rounded-md bg-zinc-200 dark:bg-zinc-700 p-1.5'
                  />
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
