import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import ShortProjects from './short-projects'

export default async function RecentProjects() {
  const projects = await getProjects(4)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-8 text-2xl'>Recent Projects</h2>
        {projects.length !== 0 ? (
          <>
            <ShortProjects projects={projects} />
            <div className='mt-32 inline-flex w-full items-center justify-center gap-2 text-muted-foreground'>
              <Link href='/projects'>All projects</Link>
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
