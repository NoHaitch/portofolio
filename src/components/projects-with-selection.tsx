'use client'

import { ProjectMetadata } from '@/lib/projects'
import Projects from './projects'
import TechIcon from './tech-icon'
import { useState, useMemo, useCallback } from 'react'
import { CgClose } from 'react-icons/cg'

interface ProjectsWithSelectionProps {
  projects: ProjectMetadata[]
  setTechUsed: Set<string>
}

export default function ProjectsWithSelection({
  projects,
  setTechUsed
}: ProjectsWithSelectionProps) {
  const [selection, setSelection] = useState<Set<string>>(new Set())

  const handleTechClick = useCallback((tech: string) => {
    setSelection(prev => {
      const newSelection = new Set(prev)
      if (newSelection.has(tech)) {
        newSelection.delete(tech)
      } else {
        newSelection.add(tech)
      }
      return newSelection
    })
  }, [])

  const handleReset = useCallback(() => setSelection(new Set()), [])

  const filteredProjects = useMemo(
    () =>
      selection.size === 0
        ? projects
        : projects.filter(project =>
            project.techUsed?.some(tech => selection.has(tech))
          ),
    [projects, selection]
  )

  const nonSelected = useMemo(
    () => Array.from(setTechUsed).filter(tech => !selection.has(tech)),
    [setTechUsed, selection]
  )

  return (
    <div>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='font-semibold'>Selection</h2>
        {selection.size > 0 && (
          <button
            className='flex items-center gap-1 text-xs font-bold'
            onClick={handleReset}
          >
            Reset
            <CgClose className='size-4' />
          </button>
        )}
      </div>
      <div className='mb-6 flex flex-wrap gap-2'>
        {[...selection, ...nonSelected].map(tech => (
          <TechButton
            key={tech}
            tech={tech}
            onClick={handleTechClick}
            selected={selection.has(tech)}
          />
        ))}
      </div>
      {filteredProjects.length > 0 ? (
        <>
          <div className='mb-8 mt-4 h-[2px] w-full rounded-md bg-muted-foreground'></div>
          <Projects projects={filteredProjects} />
        </>
      ) : (
        <p className='text-center text-muted-foreground'>No projects found</p>
      )}
    </div>
  )
}

interface TechButtonProps {
  tech: string
  onClick: (tech: string) => void
  selected: boolean
}

function TechButton({ tech, onClick, selected }: TechButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-md p-2 text-xs transition-colors ${
        selected
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted hover:bg-muted-foreground/10'
      }`}
      onClick={() => onClick(tech)}
      aria-pressed={selected}
    >
      <TechIcon tech={tech} iconClassName='size-5' />
      <span className='sr-only'>{tech}</span>
    </button>
  )
}
