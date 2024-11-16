import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import ShortProjects from './short-projects'

export default async function RecentProjects() {
  const projects = await getProjects(4)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='mb-4 font-serif text-2xl font-bold'>Recent Projects</h2>
        {projects.length !== 0 ? (
          <>
            <ShortProjects projects={projects} />
            <div className='mt-8 text-center'>
              <Link
                href='/projects'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                All projects
              </Link>
            </div>
          </>
        ) : (
          <>
            <span className='mt-4 inline-flex w-full items-center justify-center gap-2 text-muted-foreground'>
              No Recent Project Available
            </span>
          </>
        )}
      </div>
    </section>
  )
}
