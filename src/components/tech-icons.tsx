import { FC } from 'react'
import TechIcon from './tech-icon'

interface TechIconsProps {
  techs: string[]
  iconClassName?: string
  containerClassName?: string
}

const TechIcons: FC<TechIconsProps> = ({
  techs,
  iconClassName,
  containerClassName
}) => {
  const uniqueTechs = Array.from(new Set(techs))

  return (
    <>
      {uniqueTechs.map(tech => (
        <TechIcon
          key={tech}
          tech={tech}
          iconClassName={iconClassName}
          containerClassName={containerClassName}
        />
      ))}
    </>
  )
}

export default TechIcons
