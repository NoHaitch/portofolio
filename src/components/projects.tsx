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
    <div className='mb-12 grid grid-cols-1 gap-x-8 gap-y-40 sm:grid-cols-2'>
      {projects.map(project => (
        <div key={project.slug} className='group relative flex flex-col'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='h-72 w-full rounded-3xl bg-zinc-200 dark:bg-zinc-900 sm:h-60'>
                <div className='overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    className='rounded-3xl object-fill object-center p-2'
                    fill
                  />
                </div>
              </div>
            )}
            <div
              className={`absolute w-full ${project.image ? '-translate-y-8' : 'rounded-lg'} bg-zinc-200 p-2 dark:bg-zinc-900`}
            >
              <div className=''>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {project.title}
                </h2>
                <p className='line-clamp-2 text-sm text-muted-foreground'>
                  {project.description}
                </p>
              </div>
              {project.techUsed && (
                <div className='mt-2 line-clamp-2 flex flex-wrap gap-1 text-xs text-foreground'>
                  <TechIcons
                    techs={project.techUsed}
                    iconClassName='size-4'
                    containerClassName='rounded-sm bg-zinc-300 dark:bg-zinc-700 p-1'
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
