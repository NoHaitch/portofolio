import ThemeToggle from './theme-toggle'
import Link from 'next/link'
import ProfileAvatar from './profil-avatar'
import { IoMenu } from 'react-icons/io5'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-5xl items-center justify-between'>
        <div className=''>
          <Link
            href='/'
            className='flex items-center justify-center gap-2 font-serif text-2xl font-bold sm:gap-4'
          >
            <ProfileAvatar className='size-6 sm:size-8 md:size-10' />
            Francisco
          </Link>
        </div>
        <div className='absolute right-20 flex items-center justify-center sm:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoMenu className='size-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <Link
                  href='/projects'
                  className='transition-colors hover:text-foreground'
                >
                  <DropdownMenuItem>Projects</DropdownMenuItem>
                </Link>
                <Link
                  href='/activities'
                  className='transition-colors hover:text-foreground'
                >
                  <DropdownMenuItem>Activities</DropdownMenuItem>
                </Link>
                <Link
                  href='/contacts'
                  className='transition-colors hover:text-foreground'
                >
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ul className='hidden flex-col items-center gap-6 text-sm font-light text-muted-foreground sm:flex sm:flex-row'>
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
              href='/activities'
              className='transition-colors hover:text-foreground'
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              href='/contacts'
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
