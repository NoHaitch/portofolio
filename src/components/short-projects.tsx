import { ProjectMetadata } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import TechIcons from './tech-icons'

interface ShortProjectsProps {
  projects: ProjectMetadata[]
}

export default function ShortProjects({ projects }: ShortProjectsProps) {
  return (
    <div className='mb-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2'>
      {projects.map(project => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className='group relative flex flex-col'
        >
          {project.image && (
            <div className='relative h-60 w-full overflow-hidden rounded-t-3xl bg-zinc-200 dark:bg-zinc-900'>
              <Image
                src={project.image}
                alt={project.title || ''}
                className='rounded-t-3xl object-cover transition-transform duration-300 group-hover:scale-105'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          )}
          <div className='flex flex-col justify-between rounded-b-3xl bg-zinc-200 p-4 dark:bg-zinc-900'>
            <div>
              <h2 className='line-clamp-1 text-xl font-semibold'>
                {project.title}
              </h2>
              <p className='mt-2 line-clamp-2 text-sm text-muted-foreground'>
                {project.description}
              </p>
            </div>
            {project.techUsed && (
              <div className='mt-4 flex flex-wrap gap-1'>
                <TechIcons
                  techs={project.techUsed}
                  iconClassName='size-4'
                  containerClassName='rounded-sm bg-zinc-300 dark:bg-zinc-700 p-1'
                />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
