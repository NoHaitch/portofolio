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
  SiNumpy,
  SiResend,
  SiShadcnui,
  SiMdx,
  SiVercel,
  SiSass,
  SiXampp,
  SiFigma
} from 'react-icons/si'
import { FaJava, FaPython, FaDocker, FaNode } from 'react-icons/fa'
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
  docker: FaDocker,
  resend: SiResend,
  shadcn: SiShadcnui,
  mdx: SiMdx,
  node: FaNode,
  vercel: SiVercel,
  sass: SiSass,
  xampp: SiXampp,
  figma: SiFigma
}

interface TechIconProps {
  tech: string
  iconClassName?: string
  containerClassName?: string
}

const TechIcon: FC<TechIconProps> = ({
  tech,
  iconClassName,
  containerClassName
}) => {
  const Icon = techIconMap[tech.toLowerCase()]

  return (
    <div>
      {Icon ? (
        <div
          className={twMerge(
            'flex items-center justify-center gap-1',
            containerClassName
          )}
        >
          <Icon className={iconClassName} />
          <span>
            {tech === 'go' ? 'golang' : tech === 'c' ? 'language' : tech}
          </span>
        </div>
      ) : (
        <span>{tech}</span>
      )}
    </div>
  )
}

export default TechIcon
