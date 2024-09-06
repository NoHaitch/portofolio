import ProjectsWithSelection from '@/components/projects-with-selection'
import { getProjects, getTechUsedSet } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()
  const setTechUsed = await getTechUsedSet(projects)
  
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-4xl'>
        <h1 className='title mb-12'>Projects</h1>
        <ProjectsWithSelection projects={projects} setTechUsed={setTechUsed}/>
      </div>
    </section>
  )
}
