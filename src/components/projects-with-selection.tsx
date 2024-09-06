'use client'

import { ProjectMetadata } from '@/lib/projects'
import Projects from './projects'
import TechIcon from './tech-icon'
import { useState, useEffect } from 'react'
import { CgClose } from 'react-icons/cg'

export default function ProjectsWithSelection({
  projects,
  setTechUsed
}: {
  projects: ProjectMetadata[]
  setTechUsed: Set<string>
}) {
  const [selection, setSelection] = useState<string[]>([])
  const [nonSelected, setNonSelected] = useState<string[]>([])

  const handleTechClick = (tech: string) => {
    setSelection(prevSelection =>
      prevSelection.includes(tech)
        ? prevSelection.filter(item => item !== tech)
        : [...prevSelection, tech]
    )
  }

  const handleReset = () => {
    setSelection([])
  }

  useEffect(() => {
    const allTechs = Array.from(setTechUsed)
    const nonSelectedTechs = allTechs.filter(tech => !selection.includes(tech))
    setNonSelected(nonSelectedTechs)
  }, [selection, setTechUsed])

  const filteredProjects =
    selection.length > 0
      ? projects.filter(project =>
          project.techUsed?.some(tech => selection.includes(tech))
        )
      : projects

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='mb-1 font-semibold'>Selection</h1>
        {selection.length !== 0 && (
          <div
            className='rounded-xs flex cursor-pointer items-center justify-center gap-1 p-1 text-xs font-bold'
            onClick={handleReset}
          >
            <p>Reset</p>
            <CgClose />
          </div>
        )}
      </div>
      <div className='mb-4 flex flex-row flex-wrap gap-1 dark:text-zinc-200'>
        {Array.from(selection).map(tech => (
          <div
            key={tech}
            className='flex cursor-pointer items-center justify-center gap-1 rounded-md bg-green-400 p-1 text-xs dark:bg-green-600'
            onClick={() => handleTechClick(tech)}
          >
            <TechIcon tech={tech} iconClassName='size-4' />
          </div>
        ))}
        {Array.from(nonSelected).map(tech => (
          <div
            key={tech}
            className='flex cursor-pointer items-center justify-center gap-1 rounded-md bg-zinc-300 p-1 text-xs dark:bg-zinc-700'
            onClick={() => handleTechClick(tech)}
          >
            <TechIcon tech={tech} iconClassName='size-4' />
          </div>
        ))}
      </div>
      {filteredProjects.length !== 0 ? (
        <Projects projects={filteredProjects} />
      ) : (
        <p>No projects found</p>
      )}
    </div>
  )
}
