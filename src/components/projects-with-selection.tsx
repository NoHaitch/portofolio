'use client'

import { ProjectMetadata } from '@/lib/projects'
import Projects from './projects'
import TechIcon from './tech-icon'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { CgClose } from 'react-icons/cg'

export default function ProjectsWithSelection({
  projects,
  setTechUsed
}: {
  projects: ProjectMetadata[]
  setTechUsed: Set<string>
}) {
  const [selection, setSelection] = useState<Set<string>>(new Set())

  const handleTechClick = useCallback((tech: string) => {
    setSelection(prevSelection => {
      const newSelection = new Set(prevSelection)
      if (newSelection.has(tech)) {
        newSelection.delete(tech)
      } else {
        newSelection.add(tech)
      }
      return newSelection
    })
  }, [])

  const handleReset = useCallback(() => {
    setSelection(new Set())
  }, [])

  const filteredProjects = useMemo(() => {
    if (selection.size === 0) return projects
    return projects.filter(project =>
      project.techUsed?.some(tech => selection.has(tech))
    )
  }, [projects, selection])

  const nonSelected = useMemo(() => {
    return Array.from(setTechUsed).filter(tech => !selection.has(tech))
  }, [setTechUsed, selection])

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='mb-1 font-semibold'>Selection</h1>
        {selection.size !== 0 && (
          <button
            className='rounded-xs flex cursor-pointer items-center justify-center gap-1 p-1 text-xs font-bold'
            onClick={handleReset}
          >
            <p>Reset</p>
            <CgClose />
          </button>
        )}
      </div>
      <div className='mb-4 flex flex-row flex-wrap gap-1 dark:text-zinc-200'>
        {Array.from(selection).map(tech => (
          <TechButton
            key={tech}
            tech={tech}
            onClick={handleTechClick}
            selected={true}
          />
        ))}
        {nonSelected.map(tech => (
          <TechButton
            key={tech}
            tech={tech}
            onClick={handleTechClick}
            selected={false}
          />
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

function TechButton({ tech, onClick, selected }: { tech: string; onClick: (tech: string) => void; selected: boolean }) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center gap-1 rounded-md p-1 text-xs ${
        selected ? 'bg-green-400 dark:bg-green-600' : 'bg-zinc-300 dark:bg-zinc-700'
      }`}
      onClick={() => onClick(tech)}
    >
      <TechIcon tech={tech} iconClassName='size-4' />
    </button>
  )
}