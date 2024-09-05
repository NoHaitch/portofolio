import { FC } from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiCsharp,
  SiPhp,
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
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiMake,
  SiNumpy
} from 'react-icons/si'
import { FaJava, FaPython, FaDocker } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'

import { twMerge } from 'tailwind-merge'

const techIconMap: { [key: string]: FC<any> } = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: FaPython,
  ruby: SiRuby,
  'c#': SiCsharp,
  php: SiPhp,
  go: FaGolang,
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
  tailwind: SiTailwindcss,
  java: FaJava,
  c: SiC,
  cpp: SiCplusplus,
  make: SiMake,
  numpy: SiNumpy,
  docker: FaDocker
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
                <span>
                  {' '}
                  {tech === 'go' ? 'golang' : tech === 'c' ? 'langguage' : tech}
                </span>
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
