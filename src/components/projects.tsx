import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import TechIcons from './tech-icons'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-36'>
      {projects.map(project => (
        <div key={project.slug} className='group relative flex flex-col'>
          <Link href={`/project/${project.slug}`}>
            {project.image && (
              <div className='h-72 w-full overflow-hidden sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  className='rounded-3xl object-cover object-center'
                  fill
                />
              </div>
            )}
            <div className='absolute h-32 -translate-y-4 bg-zinc-200 p-2'>
              <div className=''>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {project.title}
                </h2>
                <p className='line-clamp-2 text-sm text-muted-foreground'>
                  {project.description}
                </p>
              </div>
              {project.techUsed && (
                <div className='mt-2 flex gap-1 text-xs'>
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
