import { FC } from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRuby,
  SiCsharp,
  SiPhp,
  SiGo,
  SiRust,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss
} from 'react-icons/si'
import { twMerge } from 'tailwind-merge'

const techIconMap: { [key: string]: FC<any> } = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  ruby: SiRuby,
  csharp: SiCsharp,
  php: SiPhp,
  go: SiGo,
  rust: SiRust,
  html: SiHtml5,
  css: SiCss3,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  tailwind: SiTailwindcss
}

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
      {techs.map(tech => {
        const Icon = techIconMap[tech.toLowerCase()]
        return (
          <div key={tech}>
            {Icon ? (
              <div
                className={twMerge(
                  'flex items-center justify-center gap-1',
                  containerClassName
                )}
              >
                <Icon className={iconClassName} />
                <span>{tech === 'go' ? 'golang' : tech}</span>
              </div>
            ) : (
              <span>{tech}</span>
            )}
          </div>
        )
      })}
    </>
  )
}

export default TechIcons
