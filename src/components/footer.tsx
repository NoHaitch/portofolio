import Link from 'next/link'
import { JSX, SVGProps } from 'react'

const navigation = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/francisco.rftb/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGAElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 448 512'
        className='h-6 w-6'
        aria-hidden='true'
      >
        <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/francisco-trianto/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGAElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 448 512'
        className='h-6 w-6'
        aria-hidden='true'
      >
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  },
  {
    name: 'Github',
    href: 'https://github.com/NoHaitch',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGAElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 24 24'
        className='h-6 w-6'
        aria-hidden='true'
      >
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        ></path>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-4xl'>
        <div className='flex flex-col justify-between gap-4'>
          <ul className='flex items-center justify-center gap-4 flex-wrap'>
            <li>
              <Link
                href='/skills'
                className='text-sm leading-6 text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='text-sm leading-6 text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-sm leading-6 text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='flex justify-center items-center gap-6 flex-wrap'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Francisco Trianto. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
