import { FC } from 'react'
import { IconType } from 'react-icons'
import * as Si from 'react-icons/si'
import * as Fa from 'react-icons/fa'
import * as Pi from 'react-icons/pi'
import { FaGolang } from 'react-icons/fa6'
import { FiFramer } from 'react-icons/fi'
import { HiMiniCommandLine } from 'react-icons/hi2'
import { DiProlog, DiGnu } from 'react-icons/di'
import { MdOutlineFormatShapes, MdWeb } from 'react-icons/md'
import { GrSystem } from 'react-icons/gr'
import { TbHexagonLetterRFilled } from 'react-icons/tb'
import { CiMobile1 } from 'react-icons/ci'
import { twMerge } from 'tailwind-merge'

const techIconMap: Record<string, IconType> = {
  javascript: Si.SiJavascript,
  typescript: Si.SiTypescript,
  python: Fa.FaPython,
  ruby: Si.SiRuby,
  'c#': Si.SiCsharp,
  php: Si.SiPhp,
  go: FaGolang,
  rust: Si.SiRust,
  html: Si.SiHtml5,
  css: Si.SiCss3,
  react: Si.SiReact,
  nextjs: Si.SiNextdotjs,
  nodejs: Si.SiNodedotjs,
  firebase: Si.SiFirebase,
  mongodb: Si.SiMongodb,
  mysql: Si.SiMysql,
  postgresql: Si.SiPostgresql,
  sqlite: Si.SiSqlite,
  tailwind: Si.SiTailwindcss,
  java: Fa.FaJava,
  c: Si.SiC,
  'c++': Si.SiCplusplus,
  make: Si.SiMake,
  numpy: Si.SiNumpy,
  docker: Fa.FaDocker,
  resend: Si.SiResend,
  shadcn: Si.SiShadcnui,
  mdx: Si.SiMdx,
  node: Fa.FaNode,
  vercel: Si.SiVercel,
  sass: Si.SiSass,
  xampp: Si.SiXampp,
  figma: Si.SiFigma,
  opencv: Si.SiOpencv,
  tesserac: Fa.FaGoogle,
  imutils: Fa.FaPython,
  bootstrap: Fa.FaBootstrap,
  'framer motion': FiFramer,
  express: Si.SiExpress,
  cli: HiMiniCommandLine,
  prolog: DiProlog,
  gui: MdOutlineFormatShapes,
  web: MdWeb,
  mariadb: Si.SiMariadb,
  os: GrSystem,
  gnu: DiGnu,
  qemu: Si.SiQemu,
  flask: Si.SiFlask,
  rest: TbHexagonLetterRFilled,
  jupyter: Si.SiJupyter,
  pandas: Si.SiPandas,
  ai: Pi.PiHeadCircuit,
  'scikit learn': Si.SiScikitlearn,
  vite: Si.SiVite,
  prisma: Si.SiPrisma,
  ml: Fa.FaCogs,
  keras: Si.SiKeras,
  tensorflow: Si.SiTensorflow,
  mobile: CiMobile1,
  kotlin: Si.SiKotlin,
  android: Si.SiAndroid
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
  const displayName =
    tech === 'go'
      ? 'Golang'
      : tech === 'cli'
        ? 'CLI'
        : tech === 'c'
          ? 'C Language'
          : tech.charAt(0).toUpperCase() + tech.slice(1)

  return (
    <div className={twMerge('flex items-center gap-1', containerClassName)}>
      {Icon && <Icon className={iconClassName} />}
      <span className='align-middle'>{displayName}</span>
    </div>
  )
}

export default TechIcon
