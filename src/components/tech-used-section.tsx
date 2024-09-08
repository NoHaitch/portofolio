import { getProjects, getTechUsedSet } from '@/lib/projects'
import TechIcon from './tech-icon'

export default async function TechUsedSection() {
  const projects = await getProjects()
  const techUsed = await getTechUsedSet(projects)

  return (
    <section className='flex flex-wrap gap-1'>
      {Array.from(techUsed).map(tech => (
        <div
          key={tech}
          className='flex cursor-pointer items-center justify-center gap-1 rounded-md bg-zinc-300 p-1 text-xs dark:bg-zinc-700'
        >
          <TechIcon tech={tech} iconClassName='size-4' />
        </div>
      ))}
    </section>
  )
}
