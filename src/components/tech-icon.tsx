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
  SiFigma,
  SiOpencv,
  SiExpress,
  SiMariadb,
  SiQemu,
  SiFlask
} from 'react-icons/si'
import {
  FaJava,
  FaPython,
  FaDocker,
  FaNode,
  FaGoogle,
  FaBootstrap
} from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'
import { FiFramer } from 'react-icons/fi'
import { HiMiniCommandLine } from 'react-icons/hi2'
import { DiProlog } from 'react-icons/di'
import { MdOutlineFormatShapes, MdWeb } from 'react-icons/md'
import { GrSystem } from 'react-icons/gr'
import { DiGnu } from 'react-icons/di'
import { TbHexagonLetterRFilled } from 'react-icons/tb'

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
  figma: SiFigma,
  opencv: SiOpencv,
  tesserac: FaGoogle,
  imutils: FaPython,
  bootstrap: FaBootstrap,
  'framer motion': FiFramer,
  express: SiExpress,
  cli: HiMiniCommandLine,
  prolog: DiProlog,
  gui: MdOutlineFormatShapes,
  web: MdWeb,
  mariadb: SiMariadb,
  os: GrSystem,
  gnu: DiGnu,
  qemu: SiQemu,
  flask: SiFlask,
  rest: TbHexagonLetterRFilled
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
      <div
        className={twMerge(
          'flex items-center justify-center gap-1',
          containerClassName
        )}
      >
        {Icon ? (
          <>
            <Icon className={iconClassName} />
            <span>
              {tech === 'go'
                ? 'Golang'
                : tech === 'cli'
                  ? 'CLI'
                  : tech === 'c'
                    ? 'Language'
                    : tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          </>
        ) : (
          <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
        )}
      </div>
    </div>
  )
}

export default TechIcon
