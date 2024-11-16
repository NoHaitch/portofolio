import { getProjects, getTechUsedSet } from '@/lib/projects'
import TechIcon from './tech-icon'

export default async function TechUsedSection() {
  const projects = await getProjects()
  const techUsedSet = await getTechUsedSet(projects)
  const techUsed = Array.from(techUsedSet).sort()

  return (
    <section aria-labelledby='tech-used-title'>
      <div className='flex flex-wrap gap-2'>
        {techUsed.map(tech => (
          <div
            key={tech}
            className='flex items-center justify-center rounded-md bg-zinc-300 p-2 text-xs transition-all duration-300 ease-in-out hover:bg-zinc-400 hover:shadow-md dark:bg-zinc-700 dark:hover:bg-zinc-600'
            title={tech}
          >
            <TechIcon tech={tech} iconClassName='size-5' />
          </div>
        ))}
      </div>
    </section>
  )
}
