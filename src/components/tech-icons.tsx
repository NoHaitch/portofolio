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
  return (
    <>
      {techs.map(tech => (
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
