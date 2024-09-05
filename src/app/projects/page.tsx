import Projects from '@/components/projects'
import { getProjects, getTechUsedSet } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()
  const setTechUsed = await getTechUsedSet(projects)
  console.log(setTechUsed)

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-4xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
