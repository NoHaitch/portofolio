import ThemeToggle from './theme-toggle'
import Link from 'next/link'
import ProfileAvatar from './profil-avatar'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-4xl items-center justify-between'>
        <div className=''>
          <Link
            href='/'
            className='flex items-center justify-center gap-4 font-serif text-2xl font-bold'
          >
            <ProfileAvatar className='size-10' />
            Francisco
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li>
            <Link
              href='/skills'
              className='transition-colors hover:text-foreground'
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='transition-colors hover:text-foreground'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='transition-colors hover:text-foreground'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
